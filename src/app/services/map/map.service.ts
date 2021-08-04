import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CascaronService } from '../crud/cascaron.service';

@Injectable({
  providedIn: 'root'
})
export class MapService extends CascaronService{

  constructor(public http: HttpClient) { super(http) }

  public stopList(){
    const url = `/transport/busemtmad/stops/list/`;
    return this.postQuery(url);
  }

}
