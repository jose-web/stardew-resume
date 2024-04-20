import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../pages/main-page/main-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FileReaderComponent } from '../pages/file-reader/file-reader.component';
import { GameInfoComponent } from '../pages/game-info/game-info.component';
import { SocialComponent } from '../pages/social/social.component';
import { FarmMapComponent } from '../pages/farm-map/farm-map.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', component: GameInfoComponent },
      { path: 'game-info', component: GameInfoComponent },
      { path: 'social', component: SocialComponent },
      { path: 'farm-map', component: FarmMapComponent },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule, CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    MainPageComponent, HeaderComponent, FooterComponent,
    FileReaderComponent,
    GameInfoComponent,
    SocialComponent,
    FarmMapComponent,
  ]
})
export class AppRoutingModule { }
