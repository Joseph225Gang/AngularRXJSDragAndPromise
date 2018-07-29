import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http'

import {VideoListComponent} from './training/video-list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
