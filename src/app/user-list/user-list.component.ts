import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: any;
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUser().subscribe(
      list => {this.userlist = list;}
    );
  }

}
