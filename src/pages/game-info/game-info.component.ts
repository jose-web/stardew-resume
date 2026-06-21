import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriendshipDataItem, Quest, SaveGame } from '../../type/SaveGame';
import { MapPopupService } from '../../services/map-popup.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent {

  public quests: Quest[] = []
  public social: FriendshipDataItem[] = []

  constructor(
    private router: Router,
    private popupService: MapPopupService,
  ) {

  }

  openFarmMap() {
    this.popupService.openLocation('Farm');
  }

  ngOnInit() {
    const raw = sessionStorage.getItem("saveGames");
    if (!raw) return;

    let info: SaveGame = JSON.parse(raw).SaveGame
    this.quests = info.player.questLog.Quest
    this.social = info.player.friendshipData.item
  }
}
