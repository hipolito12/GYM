import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  articles = [
    {
      id: 1,
      title: 'Título del Artículo 1',
      imageUrl: 'ruta-de-la-imagen-1.jpg',
      excerpt: 'Breve descripción del artículo 1...',
    },
    {
      id: 2,
      title: 'Título del Artículo 2',
      imageUrl: 'ruta-de-la-imagen-2.jpg',
      excerpt: 'Breve descripción del artículo 2...',
    },
    // Agrega más artículos aquí
  ];
}