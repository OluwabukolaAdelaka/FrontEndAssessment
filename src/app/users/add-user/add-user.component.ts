import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../../user-form/user-form.component';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private dialog: MatDialog, private usersService: UsersService) {}

  openUserForm() {
    const dialogRef = this.dialog.open(UserFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.addUser(result).subscribe(user => {
          console.log('User added:', user);
          // Optionally refresh the user list or perform any other actions here
        });
      }
    });
  }
}
