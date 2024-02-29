import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileReaderComponent } from '../pages/file-reader/file-reader.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GameInfoComponent } from '../pages/game-info/game-info.component';

const routes: Routes = [
  { path: '', component: FileReaderComponent },
  { path: 'game-info', component: GameInfoComponent },

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
    FileReaderComponent,
    GameInfoComponent,
  ]
})
export class AppRoutingModule { }
