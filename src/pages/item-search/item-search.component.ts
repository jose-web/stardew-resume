import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ItemHit, SaveGameService } from '../../services/save-game.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrl: './item-search.component.scss',
})
export class ItemSearchComponent {

  public origin = window.location.origin.includes('localhost') ? '' : "/stardew-resume/"

  public search = new FormControl('');
  public total = 0;
  public hits: ItemHit[] = [];
  public hasSearched = false;

  constructor(
    private saveGameService: SaveGameService,
    private translate: TranslateService,
  ) {
    this.search.valueChanges.subscribe(value => this.runSearch(value ?? ''));
  }

  private runSearch(query: string) {
    this.hasSearched = query.trim().length > 0;
    if (!this.hasSearched) {
      this.total = 0;
      this.hits = [];
      return;
    }

    const result = this.saveGameService.searchItem(query);
    this.total = result.total;
    this.hits = result.hits.sort((a, b) => b.quantity - a.quantity);
  }

  spriteName(name: string): string {
    return name.replaceAll(' ', '_');
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  containerLabel(hit: ItemHit): string {
    const label = this.translate.instant('CONTAINER.' + hit.container);
    if (hit.container === 'Cofre' || hit.container === 'Nevera') {
      return label + (hit.tileX !== undefined ? ` (${hit.tileX}, ${hit.tileY})` : '');
    }
    return label;
  }
}
