import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class SharedModule {}
