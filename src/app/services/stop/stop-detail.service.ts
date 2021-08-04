import { Injectable } from '@angular/core';
import { CascaronService } from '../crud/cascaron.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiRrl_v2;


let headers = new HttpHeaders({
  'accessToken': localStorage.getItem('token'),
  'Content-Type': 'application/json',
  Accept: 'application/json'
});


@Injectable({
  providedIn: 'root'
})
export class StopDetailService extends CascaronService{

  constructor(public http: HttpClient) {  super(http) }


  public stopDeatil<T>(stopId: number, body: any){
    const url = apiUrl + `/transport/busemtmad/stops/${stopId}/arrives`;
    return this.http.post<T>( url, body, { 'headers': headers } );
  }

}
