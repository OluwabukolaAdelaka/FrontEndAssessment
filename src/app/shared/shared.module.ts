import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
