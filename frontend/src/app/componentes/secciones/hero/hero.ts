import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() titulo = 'TITULAR PRINCIPAL';
  @Input() detalle = 'detalle';
  @Input() subtitulo = '';
  @Input() textoBoton = 'Ver más';
  @Input() linkBoton: string | any[] | null = null;
  @Input() imagenUrl = '/images/hero-placeholder.jpg';
}