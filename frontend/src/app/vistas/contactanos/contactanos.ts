import { Component } from '@angular/core';
import { Hero } from '../../componentes/secciones/hero/hero';
import { Redes } from '../../componentes/secciones/redes/redes';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [Hero, Redes],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.scss',
})
export class Contactanos {

}
