import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Compra {
  id: number;
  referencia: string;
  fecha: string;
  descripcion: string;
  valorUnitario: number;
  valorTotal: number;
}

@Component({
  selector: 'app-panel-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panel-usuario.html',
  styleUrl: './panel-usuario.scss',
})
export class PanelUsuario implements OnInit {
  userName: string = 'Usuario';
  userEmail: string = '';
  userPhone: string = '';
  userDni: string = '';
  userAddress: string = '';
  userCity: string = '';
  avatarUrl: string | null = null;
  creditoDisponible: number = 20000000;

  // Mock data for compras
  misCompras: Compra[] = [
    { id: 75, referencia: 'Lote 123456', fecha: '11-11-2024', descripcion: 'Lorem ipsum dolor lorem en amet', valorUnitario: 123000, valorTotal: 456456 },
    { id: 75, referencia: 'Lote 123456', fecha: '11-11-2024', descripcion: 'Lorem ipsum dolor lorem en amet', valorUnitario: 123000, valorTotal: 456456 },
    { id: 75, referencia: 'Lote 123456', fecha: '11-11-2024', descripcion: 'Lorem ipsum dolor lorem en amet', valorUnitario: 123000, valorTotal: 456456 },
    { id: 75, referencia: 'Lote 123456', fecha: '11-11-2024', descripcion: 'Lorem ipsum dolor lorem en amet', valorUnitario: 123000, valorTotal: 456456 },
    { id: 75, referencia: 'Lote 123456', fecha: '11-11-2024', descripcion: 'Lorem ipsum dolor lorem en amet', valorUnitario: 123000, valorTotal: 456456 }
  ];

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const storedName = localStorage.getItem('registeredName');
    const storedLastName = localStorage.getItem('registeredLastname');
    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPhone = localStorage.getItem('registeredPhone');
    const storedDni = localStorage.getItem('registeredDni');
    const storedAddress = localStorage.getItem('registeredAddress');
    const storedCity = localStorage.getItem('registeredCity');

    this.avatarUrl = localStorage.getItem('userAvatar');

    if (storedName || storedLastName) {
      this.userName = `${storedName || ''} ${storedLastName || ''}`.trim() || 'Usuario';
    }

    this.userEmail = storedEmail || '';
    this.userPhone = storedPhone || '';
    this.userDni = storedDni || '';
    this.userAddress = storedAddress || '';
    this.userCity = storedCity || '';
  }
}
