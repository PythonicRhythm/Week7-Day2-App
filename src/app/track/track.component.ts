import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  @Input() title:any;
  @Input() album_title:any;
  @Input() album_cover:any;
  @Input() artist:any;
  @Input() duration:any;
  @Input() mp3file:any;
  @Output() activeSong = new EventEmitter<string>();

  getFormattedDuration() {
    let minutes = Math.floor(this.duration/60);
    let seconds = (this.duration%60);
    if(seconds < 10){ 
      return minutes + ":" + "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  updateActiveSong() {
    this.activeSong.emit(this.mp3file);
  }

}
