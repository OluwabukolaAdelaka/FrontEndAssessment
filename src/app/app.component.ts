import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, SidebarComponent ,UsersComponent, CommentsComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndAssessment';
}
