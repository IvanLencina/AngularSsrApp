import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) { }

  ngOnInit(): void {
  }

  getPosition() {
    // With this sentence we assure that the code will not run on the server.
    if (isPlatformBrowser(this.platformId)) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }, error => {
        console.log(error);
      })
    }
  }

}
