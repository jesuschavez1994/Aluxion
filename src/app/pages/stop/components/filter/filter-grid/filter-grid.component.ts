import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.scss']
})
export class FilterGridComponent implements OnInit {

  //Output //
  @Output() grid = new EventEmitter<boolean>();
  @Output() row = new EventEmitter<boolean>();

  //Inputs
  @Input() NameStop: string

  // 
  public active: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public GridColums(event){
    
    switch (event) {

      case true:
        this.active = true;
      break;

      case false:
        this.active = false;
      break;
    
      default:
      break;
    }

    return this.grid.emit(event);

  }

}
