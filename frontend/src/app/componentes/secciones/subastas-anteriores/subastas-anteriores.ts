
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TarjetaSubasta } from '../../tarjetas/tarjeta-subasta/tarjeta-subasta';
import { Subasta } from '../../../interfaces/subasta.interface';

@Component({
    selector: 'app-subastas-anteriores',
    standalone: true,
    imports: [NgFor, NgIf, TarjetaSubasta],
    templateUrl: './subastas-anteriores.html',
    styleUrl: './subastas-anteriores.scss'
})
export class SubastasAnteriores {
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
}
