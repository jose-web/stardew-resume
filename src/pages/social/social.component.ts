import { Component } from '@angular/core';
import { FriendshipDataItem, Quest, SaveGame } from '../../type/SaveGame';

@Component({
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {

  public quests: Quest[] = []
  public social: FriendshipDataItem[] = []

  constructor() {}

  ngOnInit() {
    let info: SaveGame = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame
    this.quests = info.player.questLog.Quest
    this.social = info.player.friendshipData.item
  }
}
