import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-comprobante-exitoso',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="success-wrapper">
      <div class="success-card">
        <div class="icon-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1>¡Comprobante cargado correctamente!</h1>
        <p>Te llegará una confirmación a tu correo electrónico una vez que el pago sea validado.</p>
        <button class="btn-black" routerLink="/perfil">Volver a mi perfil</button>
      </div>
    </div>
  `,
    styles: [`
    .success-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      padding: 20px;
      font-family: 'Montserrat', sans-serif;
    }
    .success-card {
      max-width: 500px;
      width: 100%;
      text-align: center;
      background: #f9f9f9;
      padding: 60px 40px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    .icon-circle {
      width: 100px;
      height: 100px;
      background: #3e6d6d;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #111;
    }
    p {
      font-size: 16px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 40px;
    }
    .btn-black {
      background: #000;
      color: #fff;
      border: none;
      padding: 16px 40px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
  `]
})
export class ComprobanteExitoso { }
