import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";

  constructor(private log: LoginService) { }
  ngOnInit(): void {
  }

  login(){
    this.log.setUsername(this.username);
  }

}
