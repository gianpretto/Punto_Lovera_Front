import { Component, HostListener, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SubastaEnVivo } from '../../componentes/secciones/subasta-en-vivo/subasta-en-vivo';
import { TarjetaSubasta } from '../../componentes/tarjetas/tarjeta-subasta/tarjeta-subasta';
import { Redes } from '../../componentes/secciones/redes/redes';
import { SubastasAnteriores } from '../../componentes/secciones/subastas-anteriores/subastas-anteriores';
import { Subasta, makeCountdown } from '../../interfaces/subasta.interface';

@Component({
  selector: 'app-proximas-subastas',
  standalone: true,
  imports: [NgFor, NgIf, SubastaEnVivo, TarjetaSubasta, Redes, SubastasAnteriores],
  templateUrl: './proximas-subastas.html',
  styleUrl: './proximas-subastas.scss',
})
export class ProximasSubastas implements OnInit {

  // Create enough items to demonstrate pagination (e.g., 36 items for 3 pages of 12)
  allSubastas: Subasta[] = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    estado: i % 3 === 0 ? 'ACTIVA' : 'PRÓXIMA',
    titulo: `Subasta #${i + 1} - Heladería con elaboración`,
    ubicacion: i % 2 === 0 ? 'Castelar, Buenos Aires' : 'Morón, Buenos Aires',
    descripcion: 'Alguna información relevante o interesante para detallar en un muy breve texto descriptivo, que no dure más que esto.',
    fecha: `Miércoles ${10 + (i % 20)}/11/25`,
    hora: `${10 + (i % 12)}:00`,
    countdown: makeCountdown(0, 5, 48, 9)
  }));

  // Pagination settings
  itemsPerPage = 12; // Default for desktop
  currentPage = 1;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 425) {
        this.itemsPerPage = 4;
      } else {
        this.itemsPerPage = 12;
      }

      // Reset current page if out of bounds after resize
      if (this.currentPage > this.totalPages) {
        this.currentPage = 1;
      }
    }
  }

  get totalPages(): number {
    return Math.ceil(this.allSubastas.length / this.itemsPerPage);
  }

  get paginatedSubastas(): Subasta[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.allSubastas.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get visiblePages(): (number | string)[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2; // Pages visible around current
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta) || i <= 3) { // i <= 3 ensures 1, 2, 3 are always checked initially
        range.push(i);
      }
    }

    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    for (let i of uniqueRange) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  setPage(page: number | string): void {
    if (typeof page === 'string') return;

    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      if (typeof window !== 'undefined') {
        const titleElement = document.getElementById('titulo-proximas');
        if (titleElement) {
          titleElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }
}
