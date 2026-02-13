import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-creditos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './creditos.html',
  styleUrl: './creditos.scss',
})
export class Creditos implements OnInit {
  creditoDisponible: number = 20000000;
  voucherFile: File | null = null;
  voucherPreview: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.voucherFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.voucherPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  enviarComprobante() {
    if (this.voucherFile) {
      // Simulate sending
      this.router.navigate(['/comprobante-exitoso']);
    }
  }
}
