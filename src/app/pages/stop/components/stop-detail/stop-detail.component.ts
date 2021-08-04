import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { StopDetailService } from '../../../../services/stop/stop-detail.service';
import { body } from '../../../../models/body';
import { Paradas, Arrive } from '../../../../models/interface-stop';


@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent implements OnInit, AfterViewInit {

  //Output
  @Output() Arrives = new EventEmitter<Arrive[]>();
  @Output() Marker = new EventEmitter<Arrive>();

  public grid: boolean = true
  public dataLine: any
  load: boolean = false;
  cultureInfo: string
  Text_StopRequired_YN: string
  Text_EstimationsRequired_YN: string
  Text_IncidencesRequired_YN: string
  DateTime_Referenced_Incidencies_YYYYMMDD: string
  nameStop: string;
  paradas: any[] = [];
  busMasCercano: any[] = []


  constructor(private wowSubscription: NgwWowService, private router: ActivatedRoute, public stop: StopDetailService) {

    this.router.params.subscribe( params => {

      let Body = new body(
        this.cultureInfo = "ES",
        this.Text_StopRequired_YN = "Y",
        this.Text_EstimationsRequired_YN = "Y",
        this.Text_IncidencesRequired_YN = "Y",
        this.DateTime_Referenced_Incidencies_YYYYMMDD = "2021-08-01"
      );

      this.stop.stopDeatil(params['id'], Body).subscribe((stops:Paradas) => {
        this.paradas = stops.data[0].Arrive;
        this.Arrives.emit(stops.data[0].Arrive);
        this.busMasCercano = stops.data[0].Arrive.sort((a, b)=>{
          if( (a.estimateArrive < b.estimateArrive) ){
            return -1
          }else if(a.estimateArrive > b.estimateArrive){
            return 1
          }else{
            return 0
          }
        });
        console.log(this.busMasCercano[0].destination );
        this.load = true;
      })
    })

  }

  ngOnInit(): void {
    this.wowSubscription.init();
  }
  
  ngAfterViewInit(): void {
 
  }

  reset(){
    this.wowSubscription.init();
  }

  public irMarcador(item: Arrive){
    setTimeout(() => {
      this.Marker.emit(item)
    },0)
  } 


  public StateGridColumn(event: boolean){
    this.grid = event
    console.log(event)
  }


}
