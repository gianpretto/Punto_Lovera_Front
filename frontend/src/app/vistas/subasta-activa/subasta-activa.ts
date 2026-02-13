import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Message {
  user: string;
  text: string;
  time: string;
  isOffer?: boolean;
}

@Component({
  selector: 'app-subasta-activa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subasta-activa.html',
  styleUrl: './subasta-activa.scss',
})
export class SubastaActiva implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  subastaId: string | null = null;
  currentBid: number = 1000000;
  increment: number = 50000;
  userCredits: number = 20000000;

  loteInfo = {
    nombre: 'Heladería con elaboración',
    ubicacion: 'Castelar, Buenos Aires',
    descripcion: 'Alguna información relevante o interesante pero detallar en un muy breve texto descriptivo, que no dure más que esto.',
    martillero: 'JUAN JANITEZ',
    imagenes: [
      'assets/img/default.png',
      'assets/img/default.png',
      'assets/img/default.png'
    ]
  };

  currentIndex: number = 0;
  isLightboxOpen: boolean = false;
  isChatExpanded: boolean = false; // Collapsed by default on mobile

  messages: Message[] = [
    { user: 'Sistema', text: 'Bienvenido a la subasta en vivo.', time: '16:00' },
    { user: 'Martillero', text: 'Iniciamos la puja por este excelente lote.', time: '16:01' },
    { user: 'Usuario_123', text: 'Ofertó $1.000.000', time: '16:02', isOffer: true }
  ];

  newMessage: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subastaId = this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  toggleChat() {
    this.isChatExpanded = !this.isChatExpanded;
    // Scroll to bottom when opening
    if (this.isChatExpanded) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  // Lightbox Logic
  openLightbox() {
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.loteInfo.imagenes.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.loteInfo.imagenes.length) % this.loteInfo.imagenes.length;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  // Formatting for the input
  get formattedBid(): string {
    return this.currentBid.toLocaleString('es-AR');
  }

  set formattedBid(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');
    this.currentBid = numericValue ? parseInt(numericValue, 10) : 0;
  }

  increaseBid() {
    this.currentBid += this.increment;
  }

  decreaseBid() {
    if (this.currentBid > 1000000) {
      this.currentBid -= this.increment;
    }
  }

  onlyNumbers(event: KeyboardEvent) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  placeOffer() {
    const amount = this.currentBid;

    if (!amount || amount <= 0) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    if (amount > this.userCredits) {
      alert('No tienes crédito suficiente para esta oferta.');
      return;
    }

    const baseline = 1000000;
    if (amount < baseline) {
      alert('La oferta no puede ser menor al precio base ($1.000.000).');
      return;
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.messages.push({
      user: 'Tú',
      text: `Ofertó $${amount.toLocaleString('es-AR')}`,
      time: time,
      isOffer: true
    });

    setTimeout(() => {
      this.messages.push({
        user: 'Martillero',
        text: `¡Nueva oferta recibida de $${amount.toLocaleString('es-AR')}!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1000);
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.messages.push({
        user: 'Tú',
        text: this.newMessage,
        time: time
      });
      this.newMessage = '';
    }
  }
}
