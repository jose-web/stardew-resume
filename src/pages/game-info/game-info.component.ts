import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriendshipDataItem, Quest, SaveGame } from '../../type/SaveGame';

@Component({
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent {

  public quests: Quest[] = []
  public social: FriendshipDataItem[] = []

  constructor(
    private router: Router,
  ) {
   
  }

  ngOnInit() {
    let info: SaveGame = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame
    this.quests = info.player.questLog.Quest
    this.social = info.player.friendshipData.item
  }
}
