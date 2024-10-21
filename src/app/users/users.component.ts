import { Component, OnInit } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { CommonModule } from '@angular/common'; 
import { UsersService } from '../service/users.service';
import { User } from '../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AddUserComponent, CommonModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: User[] = [];

  displayedColumns: string[] = ['name', 'username', 'email', 'address', 'phone', 'website', 'company'];
  dataSource!: MatTableDataSource<User>; 

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
