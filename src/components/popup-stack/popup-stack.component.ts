import { Component } from '@angular/core';
import { ChestContent, SaveGameService } from '../../services/save-game.service';
import { MapPopupService, PopupEntry } from '../../services/map-popup.service';

@Component({
  selector: 'app-popup-stack',
  templateUrl: './popup-stack.component.html',
  styleUrl: './popup-stack.component.scss',
})
export class PopupStackComponent {

  public origin = window.location.origin.includes('localhost') ? '' : '/stardew-resume/';

  constructor(
    public popupService: MapPopupService,
    private saveGameService: SaveGameService,
  ) { }

  get stack$() {
    return this.popupService.stack$;
  }

  close(index: number) {
    this.popupService.close(index);
  }

  itemSpriteUrl(item: ChestContent): string {
    return this.origin + '/assets/item/' + this.saveGameService.itemSpriteName(item.name) + '.png';
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  trackEntry(index: number, entry: PopupEntry) {
    return index + ':' + entry.type + ':' + (entry.type === 'location' ? entry.locationName : entry.chest.tileX + ',' + entry.chest.tileY);
  }
}
