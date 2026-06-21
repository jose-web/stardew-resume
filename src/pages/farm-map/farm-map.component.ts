import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChestVisual, LocationVisual, SaveGameService, VisualEntity } from '../../services/save-game.service';
import { MapPopupService } from '../../services/map-popup.service';
import { PanZoomDirective } from '../../directives/pan-zoom.directive';

@Component({
  selector: 'app-farm-map',
  templateUrl: './farm-map.component.html',
  styleUrl: './farm-map.component.scss',
})
export class FarmMapComponent {

  public origin = window.location.origin.includes('localhost') ? '' : "/stardew-resume/"

  @Input() locationName = 'Farm';
  @Input() popupMode = false;
  @ViewChild(PanZoomDirective) panZoom?: PanZoomDirective;

  public locationNames: string[] = [];
  public visual: LocationVisual = {
    name: 'Farm', displayName: 'Farm', isFarm: true, buildings: [], items: [], terrains: [], chests: [],
    minX: 0, minY: 0, maxX: 20, maxY: 15,
  };
  public farmType = '';
  public canvasWidthTiles = 80;
  public canvasHeightTiles = 65;
  public highlightX?: number;
  public highlightY?: number;
  public locationBackgroundUrl = '';
  public locationBackgroundFailed = false;

  constructor(
    private saveGameService: SaveGameService,
    private route: ActivatedRoute,
    private popupService: MapPopupService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.locationNames = this.saveGameService.getLocationNames();

    this.route.paramMap.subscribe(params => {
      const routeLocation = params.get('location');
      if (routeLocation) {
        this.locationName = this.saveGameService.resolveLocationName(routeLocation) ?? this.locationName;
      }
      this.loadLocation();
    });

    this.route.queryParamMap.subscribe(params => {
      const tileX = params.get('tileX');
      const tileY = params.get('tileY');
      this.highlightX = tileX != null ? Number(tileX) : undefined;
      this.highlightY = tileY != null ? Number(tileY) : undefined;
    });
  }

  selectLocation(name: string) {
    this.locationName = name;
    this.highlightX = undefined;
    this.highlightY = undefined;
    this.loadLocation();
  }

  private loadLocation() {
    this.visual = this.saveGameService.getLocationVisual(this.locationName);

    if (this.visual.isFarm) {
      this.canvasWidthTiles = 80;
      this.canvasHeightTiles = 65;
      this.farmType = this.getFarmType();
    } else {
      this.canvasWidthTiles = Math.max(this.visual.maxX + 2, 10);
      this.canvasHeightTiles = Math.max(this.visual.maxY + 2, 8);
      this.locationBackgroundFailed = false;
      this.locationBackgroundUrl = this.origin + '/assets/locations/' + this.backgroundFileName() + '.png';
    }

    this.panZoom?.notifyLocationChanged();
  }

  // FarmHouse gains a room each time the player upgrades it (player.houseUpgradeLevel),
  // so the picture has to match that real upgrade level instead of a single fixed image.
  private backgroundFileName(): string {
    if (this.visual.name === 'FarmHouse') {
      const level = Number(this.saveGameService.getSave()?.player?.houseUpgradeLevel ?? 0);
      if (level >= 1 && level <= 3) return 'FarmHouse_' + level;
      return this.visual.name;
    }
    return this.visual.name;
  }

  onLocationBackgroundLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img.naturalWidth <= 0 || img.naturalHeight <= 0) return;

    const tilesWide = img.naturalWidth / 16;
    const tilesHigh = img.naturalHeight / 16;

    // A stray object or two past the edge (e.g. a weed spawned at the map boundary)
    // is normal and just gets clipped. But if a large share of objects fall outside
    // the picture, this background doesn't actually match the room (wrong house
    // upgrade tier, wrong map) — bail out to the schematic floor instead.
    const allEntities = [...this.visual.buildings, ...this.visual.items, ...this.visual.chests, ...this.visual.terrains];
    const outOfBounds = allEntities.filter(e => e.tileX + e.width > tilesWide || e.tileY + 1 > tilesHigh).length;

    if (allEntities.length > 0 && outOfBounds / allEntities.length > 0.1) {
      this.locationBackgroundFailed = true;
      return;
    }

    this.canvasWidthTiles = tilesWide;
    this.canvasHeightTiles = tilesHigh;
  }

  onLocationBackgroundError() {
    this.locationBackgroundFailed = true;
  }

  private getFarmType() {
    const info = this.saveGameService.getSave();
    if (!info) return '';

    const farmName = ['default'];
    const season = String(info.currentSeason ?? '').toLowerCase();
    return this.origin + '/assets/farm/' + farmName[Number(info.whichFarm)] + '/farm_' + farmName[Number(info.whichFarm)] + '_' + season + '.png';
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  onBuildingClick(building: VisualEntity) {
    if (building.entryLocation) this.popupService.openLocation(building.entryLocation);
  }

  onChestClick(chest: ChestVisual) {
    this.popupService.openChest(chest, this.visual.name);
  }

  chestTitle(items: { name: string; quantity: number }[]): string {
    if (items.length === 0) return this.translate.instant('CHEST.EMPTY');
    return items.map(item => `${item.name} x${item.quantity}`).join(', ');
  }

  calculatePosition(width: number, tileX: number, tileY: number) {
    return 'width:' + this.calculateWidth(width) + '%; height:' + this.calculateHeight(1) + '%; top:' + this.calculateHeight(tileY) + '%; left:' + this.calculateWidth(tileX) + '%;'
  }

  floorBackgroundStyle() {
    return 'background-image:url(' + this.origin + '/assets/floor/0.png); background-repeat:repeat; background-size:'
      + this.calculateWidth(1) + '% ' + this.calculateHeight(1) + '%;'
  }

  calculateWidth(width: number) {
    return 100 * width / this.canvasWidthTiles;
  }

  calculateHeight(height: number) {
    return 100 * height / this.canvasHeightTiles;
  }
}
