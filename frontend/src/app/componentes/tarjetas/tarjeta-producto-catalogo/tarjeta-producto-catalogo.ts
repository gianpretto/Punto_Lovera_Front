
import { Component, Input, HostListener } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto-catalogo',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './tarjeta-producto-catalogo.html',
  styleUrl: './tarjeta-producto-catalogo.scss',
})
export class TarjetaProductoCatalogo {
  @Input() lote: number | string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagenes: string[] = [];

  currentIndex: number = 0;
  isLightboxOpen: boolean = false;

  get currentImage(): string {
    if (this.imagenes && this.imagenes.length > 0) {
      return this.imagenes[this.currentIndex];
    }
    return 'assets/img/default.png';
  }

  nextImage(event?: Event): void {
    event?.stopPropagation();
    if (!this.imagenes || this.imagenes.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  prevImage(event?: Event): void {
    event?.stopPropagation();
    if (!this.imagenes || this.imagenes.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }

  openLightbox(): void {
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Handle keyboard events for lightbox navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }
}
