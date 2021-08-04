import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../models/interface-login';


const apiUrl = environment.apiUrl;

let headers = new HttpHeaders({
  'email': environment.email,
  'X-ClientId': environment.XClientId,
  'passKey':  environment.passKey,
  'password': environment.password
});


@Injectable({
  providedIn: 'root'
})
export class GenerateTokenService {
  
  constructor(protected http: HttpClient) { }

  // Read
  public execQuery<T>( query: string ) {
    query = apiUrl + query;
    return this.http.get<T>( query, { 'headers': headers } );
  }


  public Login(){
    const url = `/mobilitylabs/user/login/`;
    return this.execQuery<LoginResponse>(url);

  }


}
