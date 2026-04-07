import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Servicio } from '../../models/servicio.model';
import { ServiciosService } from '../../services/servicios.service';
import { ToastService } from '../../services/toast.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-favoritos',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf, ServiceCardComponent, FooterComponent],
    template: `
    <div class="section">
      <div class="fav-header">
        <div>
          <h1>Mis Favoritos</h1>
          <p>{{ favoritos.length }} servicio{{ favoritos.length !== 1 ? "s" : "" }} guardado{{ favoritos.length !== 1 ? "s" : "" }}</p>
        </div>
        <button class="btn btn-danger" *ngIf="favoritos.length > 0" (click)="limpiarTodos()">🗑️ Limpiar Todos</button>
      </div>
      <ng-container *ngIf="favoritos.length > 0; else empty">
        <div class="fav-grid">
          <app-service-card *ngFor="let s of favoritos"
            [servicio]="s" [esFavorito]="true" [mostrarEliminar]="false"
            (toggleFav)="quitarFav($event)">
          </app-service-card>
        </div>
      </ng-container>
      <ng-template #empty>
        <div class="fav-empty">
          <div class="icon">🤍</div>
          <h3>No tienes favoritos aún</h3>
          <p>Explora nuestros servicios y guarda los que más te interesen</p>
          <a class="btn btn-primary" routerLink="/servicios" style="margin-top:1rem">Explorar Servicios</a>
        </div>
      </ng-template>
    </div>
    <app-footer />
  `,
    styles: [`
    .fav-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .fav-header h1 { font-size: 2rem; font-weight: 800; }
    .fav-header p { color: var(--gray); font-size: 14px; margin-top: 4px; }
    .fav-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-bottom: 2rem; }
    .fav-cta { border: 1px solid var(--gray-border); border-radius: var(--radius);
      padding: 2rem; text-align: center; }
    .fav-cta h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: .5rem; }
    .fav-cta p { color: var(--gray); font-size: 14px; margin-bottom: 1.25rem; }
    .fav-empty { text-align: center; padding: 4rem 2rem; color: var(--gray); }
    .fav-empty .icon { font-size: 3rem; margin-bottom: 1rem; }
    .fav-empty h3 { font-size: 1.25rem; font-weight: 700; color: var(--dark); margin-bottom: .5rem; }
    @media (max-width: 900px) { .fav-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 600px) { .fav-grid { grid-template-columns: 1fr; } }
  `]
})
export class FavoritosComponent implements OnInit {
    favoritos: Servicio[] = [];
    constructor(private svc: ServiciosService, private toast: ToastService) { }
    ngOnInit() {
        this.svc.favoritos$.subscribe(() => this.favoritos = this.svc.getFavoritos());
        this.svc.getServicios().subscribe(() => this.favoritos = this.svc.getFavoritos());
    }
    quitarFav(id: number) { this.svc.toggleFavorito(id); this.toast.show("Eliminado de favoritos"); }
    limpiarTodos() { if (!confirm('¿Eliminar todos los favoritos?')) return; this.svc.limpiarFavoritos(); this.toast.show('Favoritos eliminados'); }
}