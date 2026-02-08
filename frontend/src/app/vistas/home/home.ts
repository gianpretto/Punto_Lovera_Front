import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor,NgIf } from '@angular/common';
import { Hero } from '../../componentes/secciones/hero/hero';
import { TarjetaSubasta } from '../../componentes/tarjetas/tarjeta-subasta/tarjeta-subasta';


import { Subasta, makeCountdown } from '../../interfaces/subasta.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor, NgIf, Hero, TarjetaSubasta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  proximasSubastas: Subasta[] = [
    {
      estado: 'ACTIVA',
      titulo: 'Heladería con elaboración',
      ubicacion: 'Castelar, Buenos Aires',
      descripcion: 'Heladería equipada con máquina de helados, vitrinas y mobiliario completo. Heladería equipada con máquina de helados, vitrinas y mobiliario completo.Heladería equipada con máquina de helados, vitrinas y mobiliario completo.Heladería equipada con máquina de helados, vitrinas y mobiliario completo.Heladería equipada con máquina de helados, vitrinas y mobiliario completo.Heladería equipada con máquina de helados, vitrinas y mobiliario completo.',
      fecha: 'Miércoles 11/11/25',
      hora: '22:30',
      countdown: makeCountdown(0, 5, 48, 9)
    },
    {
      estado: 'PRÓXIMA',
      titulo: 'Lote de maquinaria',
      ubicacion: 'San Isidro, Buenos Aires',
      descripcion: 'Lote de maquinaria en buen estado, ideal para taller pequeño.',
      fecha: 'Lunes 22/12/25',
      hora: '18:00',
      countdown: makeCountdown(2, 12, 0, 0)
    },
    {
      estado: 'PRÓXIMA',
      titulo: 'Negocio gastronómico',
      ubicacion: 'Morón, Buenos Aires',
      descripcion: 'Local con equipamiento completo y excelente ubicación comercial.',
      fecha: 'Viernes 02/01/26',
      hora: '16:00',
      countdown: makeCountdown(10, 4, 30, 0)
    },
    {
      estado: 'PRÓXIMA',
      titulo: 'Tienda de diseño',
      ubicacion: 'Palermo, Buenos Aires',
      descripcion: 'Local boutique con decoración moderna y clientela estable.',
      fecha: 'Miércoles 15/01/26',
      hora: '20:00',
      countdown: makeCountdown(20, 8, 15, 45)
    }
  ];

  subastasAnteriores: Subasta[] = [
    {
      titulo: 'Antigua panadería',
      ubicacion: 'Morón, Buenos Aires',
      descripcion: 'Panadería familiar vendida recientemente.',
      fecha: 'Marzo 10/25',
      hora: '12:00'
    },
    {
      titulo: 'Pequeña imprenta',
      ubicacion: 'Castelar, Buenos Aires',
      descripcion: 'Imprenta con prensa offset y clientela estable.',
      fecha: 'Febrero 05/25',
      hora: '10:30'
    },
    {
      titulo: 'Lavadero de autos',
      ubicacion: 'Ituzaingó, Buenos Aires',
      descripcion: 'Lavadero con sistema automatizado y buen flujo de clientes.',
      fecha: 'Enero 20/25',
      hora: '09:00'
    },
    {
      titulo: 'Local de ropa',
      ubicacion: 'Lomas, Buenos Aires',
      descripcion: 'Local boutique con stock inicial incluido.',
      fecha: 'Diciembre 12/24',
      hora: '14:45'
    }
  ];

  logos = Array.from({ length: 7 }, (_, i) => ({
    src: 'assets/img/empresa-placeholder.png',
    alt: `Logo ${i + 1}`
  }));

  faqs = [
    {
      pregunta: '¿Cómo participa uno en una subasta?',
      respuesta: `Registro, verificación y seguir los pasos indicados en la sesión.`,
      abierta: true
    },
    {
      pregunta: '¿Puedo vender mi local a través de la plataforma?',
      respuesta: 'Sí, podés crear un aviso de venta y coordinar la subasta con un asesor.',
      abierta: false
    },
    {
      pregunta: '¿Qué comisiones aplica la plataforma?',
      respuesta: 'Las comisiones se detallan en los términos y condiciones.',
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
