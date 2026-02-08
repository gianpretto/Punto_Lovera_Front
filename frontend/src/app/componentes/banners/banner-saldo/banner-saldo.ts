import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-saldo.html',
  styleUrl: './banner-saldo.scss',
})
export class BannerSaldo {
  @Input() viewType: 'panel-usuario' | 'creditos' = 'panel-usuario';
  // En el futuro este valor vendrá del backend
  @Input() saldo: number = 20000000;

  get formattedSaldo(): string {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(this.saldo);
  }
}
