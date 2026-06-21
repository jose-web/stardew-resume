import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChestVisual } from './save-game.service';

export type PopupEntry =
  | { type: 'location'; locationName: string }
  | { type: 'chest'; chest: ChestVisual; locationName: string };

@Injectable({ providedIn: 'root' })
export class MapPopupService {

  private stack = new BehaviorSubject<PopupEntry[]>([]);
  readonly stack$ = this.stack.asObservable();

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationStart') this.closeAll();
    });
  }

  openLocation(locationName: string) {
    this.stack.next([...this.stack.value, { type: 'location', locationName }]);
  }

  openChest(chest: ChestVisual, locationName: string) {
    this.stack.next([...this.stack.value, { type: 'chest', chest, locationName }]);
  }

  close(index: number) {
    this.stack.next(this.stack.value.slice(0, index));
  }

  closeAll() {
    if (this.stack.value.length > 0) this.stack.next([]);
  }
}
