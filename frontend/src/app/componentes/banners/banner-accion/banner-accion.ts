import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-accion',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './banner-accion.html',
  styleUrl: './banner-accion.scss',
})
export class BannerAccion {
  @Input() type: 'quiero-comprar' | 'quiero-vender' = 'quiero-comprar';

  get title(): string {
    return this.type === 'quiero-comprar'
      ? 'REGISTRATE Y EMPEZA A PARTICIPAR'
      : 'REGISTRATE Y EMPEZA A VENDER';
  }

  get buttonText(): string {
    return this.type === 'quiero-comprar' ? 'Registrarme →' : 'Contacto';
  }

  get buttonLink(): string {
    return this.type === 'quiero-comprar' ? '/registro' : '/contacto';
  }
}
