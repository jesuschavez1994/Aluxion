import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';
import { Arrive } from '../../../../models/interface-stop';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  styles:[
    `
    `
  ]
})
export class MapComponent implements OnInit {

  //Input
  @Input() Arrives: Arrive[];
  @Input() coordinates:[number, number];

  constructor() { }
  center: [number, number] = [-3.74922, 40.463667]; // coodernadas de Madrid España
  map: mapboxgl.Map

  ngOnInit(): void {

    console.log('Input', this.Arrives)

    this.map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 12
    });
    
    // const markerHTML: HTMLElement = document.createElement('div')
    // markerHTML.className = "marker";

    for(let i = 0; i < this.Arrives.length; i++ ){
      new mapboxgl.Marker()
        .setLngLat(this.Arrives[i].geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' + this.Arrives[i].line + '</h3><p>' + this.Arrives[i].destination + '</p>'
        ))
        .addTo(this.map);
    }
          
  }

  public irMarcador(  marker: [number, number] ) {
    const [lat, lng] = marker;
    this.map.flyTo({
      center: [lat, lng],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    })
  }
  
}
