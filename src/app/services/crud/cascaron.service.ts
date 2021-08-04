import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;


let headers = new HttpHeaders({
  'accessToken': localStorage.getItem('token'),
  'Content-Type': 'application/json',
  Accept: 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class CascaronService {


  constructor(protected http: HttpClient) {}

  // Read
  protected execQuery<T>( query: string ) {
    query = apiUrl + query;
    return this.http.get<T>( query, { 'headers': headers } );
  }
  
  // Create or Update
  protected postQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.post<T>( query, {} ,{ 'headers': headers } );
  }
  
  // Delete
  protected DeleteQuery<T>( query: string ) {
    query = apiUrl + query;
    return this.http.delete<T>( query );
  }
}
