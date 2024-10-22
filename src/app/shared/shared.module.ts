import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedModule {}
