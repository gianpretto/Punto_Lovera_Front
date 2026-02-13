import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-datos-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos-usuario.html',
  styleUrl: './datos-usuario.scss',
})
export class DatosUsuario implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  successMessage = '';
  avatarUrl: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      fechaNacimiento: [''],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      cp: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Load existing data
    this.profileForm.patchValue({
      nombre: localStorage.getItem('registeredName') || '',
      apellido: localStorage.getItem('registeredLastname') || '',
      telefono: localStorage.getItem('registeredPhone') || '',
      dni: localStorage.getItem('registeredDni') || '',
      fechaNacimiento: localStorage.getItem('registeredBirth') || '',
      direccion: localStorage.getItem('registeredAddress') || '',
      ciudad: localStorage.getItem('registeredCity') || '',
      provincia: localStorage.getItem('registeredProvince') || '',
      cp: localStorage.getItem('registeredZip') || ''
    });

    // Load avatar from localStorage
    this.avatarUrl = localStorage.getItem('userAvatar');
  }

  get f() { return this.profileForm.controls; }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
        localStorage.setItem('userAvatar', this.avatarUrl!);
        this.profileForm.markAsDirty(); // Mark as modified so save button enables
      };
      reader.readAsDataURL(file);
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

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    // Save via AuthService
    this.authService.updateUserData(this.profileForm.value);

    // Save extra field
    localStorage.setItem('registeredBirth', this.profileForm.value.fechaNacimiento);

    this.successMessage = 'Datos actualizados correctamente.';
    this.profileForm.markAsPristine(); // Disable button after save

    // Redirect back to profile after short delay
    setTimeout(() => {
      this.router.navigate(['/perfil']);
    }, 1500);
  }
}
