import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private trackURL = "https://api.deezer.com/track/3135556";
  private playlistURL = "https://api.deezer.com/playlist/908622995";


  private GEToptions = {
    method: "GET"
  };

  constructor() { }

  async grabSpecificSong() {
    const response = await fetch(this.trackURL, this.GEToptions);
    const data = await response.json();
    console.log(response, data);
    return data;
  }

  async grabSpecificPlaylist() {
    const response = await fetch(this.playlistURL, this.GEToptions);
    const data = await response.json();
    console.log(response, data);
    return data;
  }
}
