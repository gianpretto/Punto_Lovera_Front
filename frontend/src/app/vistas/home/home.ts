import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

   proximasSubastas = Array.from({ length: 4 }, (_, i) => ({
    estado: i === 1 ? 'ACTIVA' : 'PRÓXIMAMENTE',
    titulo: 'Heladería con elaboración',
    ubicacion: 'Castelar, Buenos Aires',
    descripcion: 'Alguna información relevante o interesante para detallar en un muy breve texto descriptivo.',
    fecha: 'Miércoles 11/11/25',
    hora: '22:30',
    countdown: { d: 18, h: 5, m: 48, s: 9 }
  }));

  subastasAnteriores = Array.from({ length: 4 }, () => ({
  titulo: 'Heladería con elaboración',
  ubicacion: 'Castelar, Buenos Aires.',
  descripcion: 'Alguna información relevante o interesante para detallar en un muy breve texto descriptivo, que no dure más que esto.',
  fecha: 'Miércoles 11/11/25',
  hora: '22:30'
}));

logos = Array.from({ length: 7 }, (_, i) => ({
  src: 'assets/img/empresa-placeholder.png',
  alt: `Logo ${i + 1}`
}));

faqs = [
  {
    pregunta: '¿Cuál es la que cual es es el cual es?',
    respuesta: `Respuesta esto puede ser todo lo largo que quieras, igual recomendaría
    no más de dos párrafos simples de leer. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    abierta: true   // la primera abierta por defecto
  },
  {
    pregunta: '¿Cuál es la que cual es es el cual es?',
    respuesta: 'Respuesta de ejemplo para la segunda pregunta.',
    abierta: false
  },
  {
    pregunta: '¿Cuál es la que cual es es el cual es?',
    respuesta: 'Respuesta de ejemplo para la tercera pregunta.',
    abierta: false
  },
  {
    pregunta: '¿Cuál es la que cual es es el cual es?',
    respuesta: 'Respuesta de ejemplo para la cuarta pregunta.',
    abierta: false
  }
];

toggleFaq(index: number) {
  this.faqs = this.faqs.map((f, i) => ({
    ...f,
    abierta: i === index ? !f.abierta : false
  }));
}


}
