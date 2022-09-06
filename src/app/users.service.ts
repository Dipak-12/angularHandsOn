import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('doug@bailey.com:doug')
    })
  };

  getUser() : Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users",this.httpOptions);
  }
}
