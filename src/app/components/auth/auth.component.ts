import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginActive = true;

  // Login
  loginEmail = '';
  loginPassword = '';
  showLoginPassword = false;
  loginMessage = '';

  // Registro
  nombre = '';
  apellidoP = '';
  apellidoM = '';
  telefono = '';
  edad: number | null = null;
  correo = '';
  contrasena = '';
  confirmarContrasena = '';
  showRegisterPassword = false;
  registerMessage = '';

  constructor(private router: Router) {}

  switchToRegister() {
    this.isLoginActive = false;
    this.clearMessages();
  }

  switchToLogin() {
    this.isLoginActive = true;
    this.clearMessages();
  }

  togglePassword(form: 'login' | 'register') {
    if (form === 'login') {
      this.showLoginPassword = !this.showLoginPassword;
    } else {
      this.showRegisterPassword = !this.showRegisterPassword;
    }
  }

  passwordsMatch(): boolean {
    return this.contrasena === this.confirmarContrasena;
  }

  get passwordMessage(): string {
    if (!this.confirmarContrasena) return '';
    return this.passwordsMatch() ? '✔ Las contraseñas coinciden' : '✖ Las contraseñas no coinciden';
  }

  onLoginSubmit() {
    if (this.loginEmail === 'emmanuel.mata.vz@gmail.com' && this.loginPassword === '1234') {
      this.loginMessage = 'Inicio de sesión exitoso.';
      setTimeout(() => {
        this.router.navigate(['/cartelera']);
      }, 1000); // Espera 1000 ms = 1 segundo
    } else {
      this.loginMessage = 'Correo o contraseña incorrectos.';
    }
  }

  onRegisterSubmit() {
    if (!this.passwordsMatch()) {
      this.registerMessage = '❌ Las contraseñas no coinciden.';
      return;
    }

    this.registerMessage = '✅ Registro exitoso. Ya puedes iniciar sesión.';
    // Aquí puedes implementar lógica para guardar los datos o llamar a un servicio
  }

  clearMessages() {
    this.loginMessage = '';
    this.registerMessage = '';
  }
}
