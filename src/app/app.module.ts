import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [[{provide: APP_BASE_HREF, useValue: '/test/'}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
