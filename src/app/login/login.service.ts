import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  a: String = '';
  subject =  new Subject<String>();
  constructor() { }
  setUsername(name: String){
    this.a = name;
    console.log(this.a);
    this.subject.next(name);

  }

  getUsername(): Observable<String>{
    console.log(this.a)
    return this.subject.asObservable();
  }
}
