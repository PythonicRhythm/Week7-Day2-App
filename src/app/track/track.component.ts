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
  @Input() album_cover_medium:any;
  @Input() artist:any;
  @Input() duration:any;
  @Input() mp3file:any;
  @Output() activeSong = new EventEmitter<object>();

  getFormattedDuration() {
    let minutes = Math.floor(this.duration/60);
    let seconds = (this.duration%60);
    if(seconds < 10){ 
      return minutes + ":" + "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  updateActiveSong() {
    let track = {
      title: this.title,
      album: {
        title: this.album_title,
        cover: this.album_cover,
        cover_medium: this.album_cover_medium
      },
      artist: this.artist,
      duration: this.duration,
      mp3file: this.mp3file
    }
    this.activeSong.emit(track);
  }

}
