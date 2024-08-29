import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'; 
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = []; // Inicializa posts como un array vacío

  constructor(private postsService: PostsService) {} // Inyecta el servicio

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => this.posts = data);
  }
}