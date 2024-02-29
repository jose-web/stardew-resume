import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveGame, TentacledItem } from '../../type/SaveGame';

@Component({
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent {

  public info: SaveGame | null = null

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.info = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame 
  }
}
