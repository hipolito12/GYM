import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent {
  blogPosts = [
    {
      title: 'El arte de entrenar',
      subtitle: 'Las 5 reglas para un entrenamiento eficiente.',
      date: '27/08/2022',
      image: 'https://img.freepik.com/foto-gratis/hombre-joven-fitness-estudio_7502-5008.jpg'
    },
    {
      title: 'Quemar calorías en reposo luego de hacer ejercicio',
      subtitle: 'La magia del efecto EPOC',
      date: '25/03/2023',
      image: 'https://media.istockphoto.com/id/1145802290/es/vector/l%C3%ADnea-de-acabado-de-carrera-de-corredor-y-silueta-de-campo.jpg?s=612x612&w=0&k=20&c=qdmyCbmvdcQP5uPghTqeVuzWYe-H-KGPruD0m82MqI8='
    },
    {
      title: 'Beneficios de una Alimentación Saludable en tu Rutina de Ejercicio',
      subtitle: 'Cómo una dieta equilibrada potencia tus resultados en el gimnasio',
      date: '05/07/2023',
      image: 'https://s03.s3c.es/imag/_v0/770x420/4/3/0/alimentos-deportistas-770.jpg'
    }
  ];
}
