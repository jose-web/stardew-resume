import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from '../pages/main-page/main-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FileReaderComponent } from '../pages/file-reader/file-reader.component';
import { GameInfoComponent } from '../pages/game-info/game-info.component';

const routes: Routes = [
  { path: '', component: FileReaderComponent, pathMatch: 'full' },

  {
    path: '', component: MainPageComponent,
    children: [
      { path: 'game-info', component: GameInfoComponent },
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
    MainPageComponent,
    HeaderComponent,
    FileReaderComponent,
    GameInfoComponent,
  ]
})
export class AppRoutingModule { }
