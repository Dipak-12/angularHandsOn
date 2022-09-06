import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: String = "";
  constructor(private log:LoginService) { }

  ngOnInit(): void {
    this.log.getUsername()
      .subscribe(newName => this.username = newName);
      console.log(this.username);
  }

}
