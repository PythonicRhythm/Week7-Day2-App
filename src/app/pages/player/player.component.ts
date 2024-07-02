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

  async playSong(mp3file:any) {
    const data = await this.deezer.grabSpecificSong();
    this.currentFile = data;
    
  }

  async grabPlaylist() {
    const data = await this.deezer.grabSpecificPlaylist();
    this.currentPlaylist = data;
  }
}