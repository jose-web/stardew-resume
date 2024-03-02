import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveGame, TentacledItem } from '../../type/SaveGame';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  public farmName = ''

  public username = ''

  public time = {
    day: 0,
    season: 0,
    year: 0
  }

  public money = 0

  public goldenWalnuts = 0

  public season = ['Spring', 'Summer', 'Fall', 'Winter']

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    let info: SaveGame = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame
    this.farmName = info.player.farmName
    this.username = info.player.name
    this.money = Number(info.player.money)
    this.time.day = Number(info.player.dayOfMonthForSaveGame)
    this.time.season = Number(info.player.seasonForSaveGame)
    this.time.year = Number(info.player.yearForSaveGame)
    this.goldenWalnuts = Number(info.goldenWalnuts)
  }
}
