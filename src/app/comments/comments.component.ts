import { Component, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'; 
import { MatPaginator } from '@angular/material/paginator';


interface Comment {
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  displayedColumns: string[] = ['name', 'email', 'body'];
  dataSource = new MatTableDataSource<Comment>();

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments').subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching comments', error);
      }
    );
  }
}
