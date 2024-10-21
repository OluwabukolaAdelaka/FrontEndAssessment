import { Component } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AddUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
