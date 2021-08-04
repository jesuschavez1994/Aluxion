import { Component, OnInit } from '@angular/core';
import { GenerateTokenService } from '@app/services/login/generate-token.service';
import * as  mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Aluxion';

  constructor(public TokenAc: GenerateTokenService){
    TokenAc.Login().subscribe( resp =>{
      const  [  data  ] = resp.data;
      localStorage.setItem('token', data.accessToken);
    });
  }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    
  }

}
