import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeezerService } from '../../deezer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit{
  
  currentFile:any;
  audiosrc:any;
  currentPlaylist:any;

  constructor(private deezer: DeezerService){}

  async ngOnInit() {
    this.currentPlaylist = await this.deezer.grabSpecificPlaylist();
  }

  async playSong(track:any) {
    this.currentFile = track;
    let audio = document.getElementsByTagName("audio")[0];
    audio?.pause;
    audio?.setAttribute("src", track.mp3file);
    audio?.load;
  }

  async grabPlaylist() {
    const data = await this.deezer.grabSpecificPlaylist();
    this.currentPlaylist = data;
  }

  getFormattedDuration() {
    let minutes = Math.floor(this.currentFile.duration/60);
    let seconds = (this.currentFile.duration%60);
    if(seconds < 10){ 
      return minutes + ":" + "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
}