import { Component, OnInit } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { CommonModule } from '@angular/common'; 
import { UsersService } from '../service/users.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AddUserComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
