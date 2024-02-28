import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileReaderComponent } from '../pages/file-reader/file-reader.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: FileReaderComponent },
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
    FileReaderComponent
  ]
})
export class AppRoutingModule { }
