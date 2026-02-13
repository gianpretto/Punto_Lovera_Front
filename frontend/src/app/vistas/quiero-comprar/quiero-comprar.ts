import { Component } from '@angular/core';
import { BannerAccion } from '../../componentes/banners/banner-accion/banner-accion';

@Component({
  selector: 'app-quiero-comprar',
  standalone: true,
  imports: [BannerAccion],
  templateUrl: './quiero-comprar.html',
  styleUrl: './quiero-comprar.scss',
})
export class QuieroComprar {

}
