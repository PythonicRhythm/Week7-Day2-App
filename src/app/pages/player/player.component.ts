import { Component } from '@angular/core';
import { DeezerService } from '../../deezer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  title = "HELLO";
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state:any;
  currentFile:any;
  audiosrc:any;
  currentPlaylist:any;

  constructor(private deezer: DeezerService){}

  async playSong() {
    const data = await this.deezer.grabSpecificSong();
    this.currentFile = data;
    
  }

  async grabPlaylist() {
    const data = await this.deezer.grabSpecificPlaylist();
    this.currentPlaylist = data;
    console.log(data);
  }
}