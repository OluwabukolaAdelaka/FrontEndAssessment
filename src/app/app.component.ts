import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, SidebarComponent ,UsersComponent, 
    CommentsComponent, AddUserComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage: string = 'users';

  navigate(page: string) {
    console.log(`Navigating to: ${page}`);
    this.currentPage = page;
  } 
  title = "FrontEndAssessment"
}
