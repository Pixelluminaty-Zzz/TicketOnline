import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'cartelera', component: CarteleraComponent },
];
