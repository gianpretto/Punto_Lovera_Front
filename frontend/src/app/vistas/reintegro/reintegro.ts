import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reintegro',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './reintegro.html',
    styleUrl: './reintegro.scss',
})
export class Reintegro {
    reintegroForm: FormGroup;
    submitted = false;
    success = false;

    constructor(private fb: FormBuilder, private router: Router) {
        this.reintegroForm = this.fb.group({
            monto: ['', [Validators.required, Validators.min(1)]],
            cbu: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]],
            alias: ['', Validators.required],
            motivo: ['']
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.reintegroForm.invalid) return;

        // Simulate request
        this.success = true;
        setTimeout(() => {
            this.router.navigate(['/perfil']);
        }, 3000);
    }
}
