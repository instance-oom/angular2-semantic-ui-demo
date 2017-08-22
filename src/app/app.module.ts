import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PAGES } from './pages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ...PAGES,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
