import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';
import { Arrive } from '../../models/interface-stop';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit {

  @ViewChild('mapa') mapa: MapComponent; 
  @ViewChild('paradas')  paradas: StopDetailComponent;

  public Arrives: Arrive[];
  public coordinates: [number, number]
  load: boolean = false;
  map: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  public arrives($event: Arrive[]){
    this.Arrives = $event;
    this.load = true;
    console.log('Ou', $event)
  }

  public marker($event: Arrive){
    console.log($event.geometry.coordinates)
    this.mapa.irMarcador($event.geometry.coordinates)
  }

  public stateMap($event: boolean){
    this.map = $event
  }

  public toStops($event: boolean){
    this.map = $event
  }

}
