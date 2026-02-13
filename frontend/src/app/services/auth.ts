import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser$: Observable<string | null>;

  constructor() {
    // Check local storage for existing session
    const savedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<string | null>(savedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): string | null {
    return this.currentUserSubject.value;
  }

  // Register: saves user credentials and details to local storage (mock DB)
  register(email: string, password: string, nombre: string, apellido: string): void {
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    localStorage.setItem('registeredName', nombre);
    localStorage.setItem('registeredLastname', apellido);
    // Don't login yet, waiting for email validation
  }

  // Login: verifies credentials against local storage
  login(email: string, password: string): boolean {
    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPass = localStorage.getItem('registeredPassword');
    const storedName = localStorage.getItem('registeredName');

    if (email === storedEmail && password === storedPass) {
      // Use name if available, otherwise fallback to email
      const displayValue = storedName ? storedName : email;
      localStorage.setItem('currentUser', displayValue);
      this.currentUserSubject.next(displayValue);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  updateUserData(data: any): void {
    if (data.nombre) localStorage.setItem('registeredName', data.nombre);
    if (data.apellido) localStorage.setItem('registeredLastname', data.apellido);
    if (data.telefono) localStorage.setItem('registeredPhone', data.telefono);
    if (data.dni) localStorage.setItem('registeredDni', data.dni);
    if (data.direccion) localStorage.setItem('registeredAddress', data.direccion);
    if (data.ciudad) localStorage.setItem('registeredCity', data.ciudad);
    if (data.provincia) localStorage.setItem('registeredProvince', data.provincia);
    if (data.cp) localStorage.setItem('registeredZip', data.cp);

    // Update current user display name if changed
    if (data.nombre) {
      localStorage.setItem('currentUser', data.nombre);
      this.currentUserSubject.next(data.nombre);
    }
  }
}
