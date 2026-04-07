import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:id', component: DetalleComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', redirectTo: '' }
];