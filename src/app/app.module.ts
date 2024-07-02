import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlayerComponent } from './pages/player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
