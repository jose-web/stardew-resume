import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

const MAX_SCALE = 4;

@Directive({
  selector: '[appPanZoom]',
  exportAs: 'appPanZoom',
})
export class PanZoomDirective implements OnInit, OnDestroy {

  @Input('appPanZoom') enabled = true;

  private scale = 1;
  private fitScale = 1;
  private x = 0;
  private y = 0;

  private userInteracted = false;
  private resizeObserver?: ResizeObserver;

  private dragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;

  private pinchStartDistance = 0;
  private pinchStartScale = 1;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.apply();
    // Deferred a frame: right after Angular renders new content (initial load or a
    // location switch), the DOM hasn't been laid out yet, so measuring immediately
    // would read the previous element's size instead of the new one.
    requestAnimationFrame(() => this.attachObserver());
  }

  private attachObserver() {
    const content = this.el.nativeElement.firstElementChild;
    if (!content || this.resizeObserver) {
      this.fitToContainer();
      return;
    }
    this.resizeObserver = new ResizeObserver(() => this.fitToContainer());
    this.resizeObserver.observe(content);
    this.fitToContainer();
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  // The map's natural size (driven by its tile aspect ratio) rarely matches the popup
  // viewport's aspect ratio, so we scale it down to fit entirely on first view instead
  // of leaving it cropped. Reset returns to this fit, not to 1:1.
  private fitToContainer() {
    const viewport = this.el.nativeElement.parentElement;
    const content = this.el.nativeElement.firstElementChild as HTMLElement | null;
    if (!viewport || !content || content.clientWidth === 0 || content.clientHeight === 0) return;

    this.fitScale = Math.min(viewport.clientWidth / content.clientWidth, viewport.clientHeight / content.clientHeight, 1);

    if (!this.userInteracted) {
      this.scale = this.fitScale;
      this.x = 0;
      this.y = 0;
      this.apply();
    }
  }

  reset() {
    this.userInteracted = false;
    this.scale = this.fitScale;
    this.x = 0;
    this.y = 0;
    this.apply();
  }

  notifyLocationChanged() {
    this.userInteracted = false;
    requestAnimationFrame(() => this.fitToContainer());
  }

  zoomIn() {
    this.userInteracted = true;
    this.setScale(this.scale + 0.5);
  }

  zoomOut() {
    this.userInteracted = true;
    this.setScale(this.scale - 0.5);
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.enabled) return;
    event.preventDefault();
    this.userInteracted = true;
    this.setScale(this.scale - event.deltaY * 0.0015);
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    if (!this.enabled) return;
    this.userInteracted = true;
    this.dragging = true;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (!this.enabled || !this.dragging) return;
    this.x += event.clientX - this.lastPointerX;
    this.y += event.clientY - this.lastPointerY;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
    this.apply();
  }

  @HostListener('pointerup')
  @HostListener('pointerleave')
  onPointerUp() {
    this.dragging = false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (!this.enabled || event.touches.length !== 2) return;
    this.userInteracted = true;
    this.pinchStartDistance = this.touchDistance(event);
    this.pinchStartScale = this.scale;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (!this.enabled || event.touches.length !== 2 || this.pinchStartDistance === 0) return;
    event.preventDefault();
    const distance = this.touchDistance(event);
    this.setScale(this.pinchStartScale * (distance / this.pinchStartDistance));
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.pinchStartDistance = 0;
  }

  private touchDistance(event: TouchEvent): number {
    const [a, b] = [event.touches[0], event.touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  private setScale(value: number) {
    this.scale = Math.min(MAX_SCALE, Math.max(this.fitScale, value));
    this.apply();
  }

  private apply() {
    this.el.nativeElement.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
  }
}
