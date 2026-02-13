import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-validar-mail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './validar-mail.html',
  styleUrl: './validar-mail.scss',
})
export class ValidarMail {
  // Logic for resending mail could go here
  resendEmail() {
    console.log('Re-sending verification email...');
    alert('Correo de verificación reenviado.');
  }
}
