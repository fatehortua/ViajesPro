import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
<<<<<<< HEAD
import { ContactoComponent } from './pages/contacto/contacto.component';
=======
>>>>>>> 7881f349d69a98351e6d21b7d6216cf9bc243679

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:id', component: DetalleComponent },
  { path: 'favoritos', component: FavoritosComponent },
<<<<<<< HEAD
  { path: 'contacto', component: ContactoComponent },
=======
>>>>>>> 7881f349d69a98351e6d21b7d6216cf9bc243679
  { path: '**', redirectTo: '' }
];