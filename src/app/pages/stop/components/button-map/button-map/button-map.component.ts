import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-map',
  templateUrl: './button-map.component.html',
  styleUrls: ['./button-map.component.scss']
})
export class ButtonMapComponent implements OnInit {

   //Output //
   @Output() showMap = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public ShowMap(){
    this.showMap.emit(true)
  }

}
