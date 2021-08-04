import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  trans = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll',['$event'])
  public handleScrollOnDocument($event){
    let scrollOffset = $event.srcElement.childNodes[1].scrollTop;
    setTimeout(()=>{

      if(scrollOffset>= 10){
        this.trans= true;
        //console.log('change transition');
        //console.log($event, 'srcElement')
        ////console.log($event.srcElement.childNodes[1], 'srcElementChildren')
        ////console.log($event.srcElement.children[0].scrollTop, 'srcElement')
        //console.log("window scroll: ", scrollOffset);
      }else{
        this.trans=false
      }
    },100);
  }
}
