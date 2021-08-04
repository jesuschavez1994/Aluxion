import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-state',
  templateUrl: './name-state.component.html',
  styleUrls: ['./name-state.component.scss']
})
export class NameStateComponent implements OnInit {

  @Input() Line: any;

  constructor() { }

  ngOnInit(): void {
  }

}
