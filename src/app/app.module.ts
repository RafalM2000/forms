import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appRouter: Routes = [
  {path: '', component: OneComponent},
  {path: 'one', component: OneComponent},
  {path: '**', component: OneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
