import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { Countdown } from '../../../interfaces/subasta.interface';

export type EstadoSubasta = 'ACTIVA' | 'PROXIMA' | 'FINALIZADA' | string;

@Component({
  selector: 'app-tarjeta-subasta',
  standalone: true,
  imports: [NgClass, NgIf, TruncatePipe],
  templateUrl: './tarjeta-subasta.html',
  styleUrl: './tarjeta-subasta.scss',
})
export class TarjetaSubasta {
  @Input() estado?: EstadoSubasta;
  @Input() titulo = '';
  @Input() ubicacion = '';
  @Input() descripcion = '';
  @Input() fecha = '';
  @Input() hora = '';

  @Input() mostrarCuentaRegresiva = true;
  @Input() countdown?: Countdown = { d: '00', h: '00', m: '00', s: '00' };
}
