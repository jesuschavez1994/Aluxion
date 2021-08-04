import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-stops',
  templateUrl: './to-stops.component.html',
  styleUrls: ['./to-stops.component.scss']
})
export class ToStopsComponent implements OnInit {

    //Output
    @Output() returnToStops = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public return(){
    this.returnToStops.emit(false);
  }

}
