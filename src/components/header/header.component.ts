import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SaveGame } from '../../type/SaveGame';

const LANG_STORAGE_KEY = 'lang';

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
    public translate: TranslateService,
  ) {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    const lang = stored ?? 'es';
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('es');
    this.translate.use(lang);
  }

  ngOnInit() {
    const raw = sessionStorage.getItem("saveGames");
    if (!raw) return;

    let info: SaveGame = JSON.parse(raw).SaveGame
    this.farmName = info.player.farmName
    this.username = info.player.name
    this.money = Number(info.player.money)
    this.time.day = Number(info.player.dayOfMonthForSaveGame)
    this.time.season = Number(info.player.seasonForSaveGame)
    this.time.year = Number(info.player.yearForSaveGame)
    this.goldenWalnuts = Number(info.goldenWalnuts)
  }

  setLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }
}
