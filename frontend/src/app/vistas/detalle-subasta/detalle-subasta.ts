
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TarjetaProductoCatalogo } from '../../componentes/tarjetas/tarjeta-producto-catalogo/tarjeta-producto-catalogo';

@Component({
  selector: 'app-detalle-subasta',
  standalone: true,
  imports: [CommonModule, TarjetaProductoCatalogo],
  templateUrl: './detalle-subasta.html',
  styleUrl: './detalle-subasta.scss'
})
export class DetalleSubasta implements OnInit {
  subastaId: string | null = null;

  // Mock data for the auction header
  subastaInfo = {
    titulo: 'Heladería con elaboración',
    ubicacion: 'Castelar, Buenos Aires',
    descripcion: 'Gran remate de equipamiento gastronómico completo por cierre definitivo. Oportunidad única para emprendedores del rubro.',
    fecha: 'Miércoles 11/11/25',
    hora: '22:30'
  };

  // Mock data for products/lots
  lotes = Array.from({ length: 12 }, (_, i) => ({
    lote: i + 1,
    titulo: `Lote de mobiliario #${i + 1}`,
    descripcion: 'Juego de mesas y sillas en excelente estado, ideal para salón principal. Madera maciza y tapizado premium.',
    imagenes: [
      'assets/img/default.png',
      'assets/img/default.png',
      'assets/img/default.png'
    ]
  }));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subastaId = params.get('id');
      // Here you would typically fetch the auction details using the ID
      // For now we use the mock data
    });
  }
}
