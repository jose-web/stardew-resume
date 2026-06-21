import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MainPageComponent } from '../pages/main-page/main-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FileReaderComponent } from '../pages/file-reader/file-reader.component';
import { GameInfoComponent } from '../pages/game-info/game-info.component';
import { SocialComponent } from '../pages/social/social.component';
import { FarmMapComponent } from '../pages/farm-map/farm-map.component';
import { ItemSearchComponent } from '../pages/item-search/item-search.component';
import { PopupStackComponent } from '../components/popup-stack/popup-stack.component';
import { PanZoomDirective } from '../directives/pan-zoom.directive';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', component: GameInfoComponent },
      { path: 'game-info', component: GameInfoComponent },
      { path: 'social', component: SocialComponent },
      { path: 'map/:location', component: FarmMapComponent },
      { path: 'farm-map', redirectTo: 'map/Farm' },
      { path: 'items', component: ItemSearchComponent },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule, CommonModule,
    TranslateModule,
  ],
  exports: [RouterModule],
  declarations: [
    MainPageComponent, HeaderComponent, FooterComponent,
    FileReaderComponent,
    GameInfoComponent,
    SocialComponent,
    FarmMapComponent,
    ItemSearchComponent,
    PopupStackComponent,
    PanZoomDirective,
  ]
})
export class AppRoutingModule { }
