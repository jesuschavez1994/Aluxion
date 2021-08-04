import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StopDetailService } from '../../services/stop/stop-detail.service';
import { Router } from '@angular/router';
import { body } from '../../models/body';
import { Paradas } from '../../models/interface-stop';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  progressBar: boolean = false;

  searchForm = new FormControl();

  cultureInfo: string;
  Text_StopRequired_YN: string;
  Text_EstimationsRequired_YN: string;
  Text_IncidencesRequired_YN: string;
  DateTime_Referenced_Incidencies_YYYYMMDD: string;

  constructor(public stop: StopDetailService,  public router: Router) { }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe( idStop => {
        console.log(idStop);
        if(idStop !== null ){

          let Body = new body(
            this.cultureInfo = "ES",
            this.Text_StopRequired_YN = "Y",
            this.Text_EstimationsRequired_YN = "Y",
            this.Text_IncidencesRequired_YN = "Y",
            this.DateTime_Referenced_Incidencies_YYYYMMDD = "2021-08-01"
          );

          this.progressBar = true;

          this.stop.stopDeatil(idStop, Body).subscribe( (resp: Paradas) => {
            this.router.navigate(['detail', idStop]);
            this.progressBar = false;
          },
          (err) => {
            console.log('Parada No existe')
          })
        }
      }
    );
  }

}
