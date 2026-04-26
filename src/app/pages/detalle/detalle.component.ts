import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Servicio } from '../../models/servicio.model';
import { ServiciosService } from '../../services/servicios.service';
import { ToastService } from '../../services/toast.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass, ServiceCardComponent, FooterComponent],
  template: `
    <div class="section" *ngIf="servicio; else notFound">
      <a class="detail-back" routerLink="/servicios">← Volver a Servicios</a>
      <div class="detail-hero">
        <img [src]="servicio.imagen" [alt]="servicio.nombre" (error)="onImgErr($event)"/>
        <div class="detail-overlay"></div>
        <div class="detail-hero-content">
          <span class="badge" [ngClass]="'badge-' + servicio.categoria">{{ servicio.categoria }}</span>
          <h1>{{ servicio.nombre }}</h1>
          <p>{{ servicio.descripcion }}</p>
        </div>
        <button class="fav-btn" [ngClass]="{ 'is-fav': esFav }" (click)="toggleFav()">
          {{ esFav ? '❤️ En Favoritos' : '🤍 Agregar a Favoritos' }}
        </button>
      </div>
      <div class="detail-layout">
        <div class="detail-main">
          <h2>Descripción Completa</h2>
          <p>{{ servicio.descripcionCompleta }}</p>
          <h2>Características Principales</h2>
          <div class="features-grid">
            <div class="feature-item" *ngFor="let c of servicio.caracteristicas">{{ c }}</div>
          </div>
          <h2>El Servicio Incluye</h2>
          <ul class="includes-list">
            <li *ngFor="let item of servicio.incluye">{{ item }}</li>
          </ul>
        </div>
        <div class="detail-sidebar">
          <div class="sidebar-box">
            <div class="sidebar-price-label">Precio</div>
            <div class="sidebar-price">{{ servicio.precio }}</div>
<<<<<<< HEAD
            <a class="btn btn-primary btn-block" routerLink="/contacto">Solicitar Información</a>
=======
>>>>>>> 7881f349d69a98351e6d21b7d6216cf9bc243679
            <button class="btn btn-block fav-toggle-btn"
                    [ngClass]="{ 'fav-active': esFav }" (click)="toggleFav()">
              {{ esFav ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos' }}
            </button>
          </div>
<<<<<<< HEAD
          <div class="sidebar-box">
            <h4>¿Necesitas ayuda?</h4>
            <p>Nuestro equipo está disponible para resolver tus dudas</p>
            <a class="btn btn-light btn-block" routerLink="/contacto">✉️ Contactar</a>
          </div>
=======
>>>>>>> 7881f349d69a98351e6d21b7d6216cf9bc243679
        </div>
      </div>
      <div class="others-section" *ngIf="otrosServicios.length > 0">
        <h2>Otros Servicios</h2>
        <div class="others-grid">
          <app-service-card *ngFor="let s of otrosServicios"
            [servicio]="s" [esFavorito]="esFavId(s.id)"
            [mostrarEliminar]="false" (toggleFav)="toggleFavById($event)">
          </app-service-card>
        </div>
        <div style="text-align:center;margin-top:1.5rem">
          <a class="btn btn-secondary" routerLink="/servicios">Ver Todos los Servicios</a>
        </div>
      </div>
    </div>
    <ng-template #notFound>
      <div class="section" style="text-align:center;padding:4rem">
        <p style="color:var(--gray)">Servicio no encontrado.</p>
        <a class="btn btn-primary" routerLink="/servicios" style="margin-top:1rem">Ver Servicios</a>
      </div>
    </ng-template>
    <app-footer />
  `,
  styles: [`
    .detail-back { display: flex; align-items: center; gap: 6px; text-decoration: none;
      color: var(--gray); font-size: 14px; font-weight: 500; margin-bottom: 1.5rem; }
    .detail-back:hover { color: var(--blue); }
    .detail-hero { position: relative; border-radius: var(--radius); overflow: hidden;
      height: 320px; margin-bottom: 2rem; }
    .detail-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .detail-overlay { position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%); }
    .detail-hero-content { position: absolute; bottom: 1.5rem; left: 1.5rem; }
    .detail-hero-content h1 { color: white; font-size: 2rem; font-weight: 800; }
    .detail-hero-content p { color: rgba(255,255,255,.85); font-size: 15px; margin-top: .25rem; }
    .fav-btn { position: absolute; top: 1rem; right: 1rem; display: flex; align-items: center;
      gap: 6px; padding: .5rem 1rem; border-radius: 8px; border: none; cursor: pointer;
      font-weight: 600; font-size: 14px; background: rgba(255,255,255,.9); color: var(--gray);
      transition: all .2s; font-family: inherit; }
    .fav-btn.is-fav { background: var(--red); color: white; }
    .detail-layout { display: grid; grid-template-columns: 1fr 280px; gap: 2rem; align-items: start; }
    .detail-main h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem; }
    .detail-main > p { font-size: 14px; color: var(--gray); line-height: 1.7; margin-bottom: 1.5rem; }
    .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin-bottom: 1.5rem; }
    .feature-item { display: flex; align-items: center; gap: 8px; padding: .75rem 1rem;
      background: var(--gray-light); border-radius: var(--radius-sm); font-size: 13px; }
    .feature-item::before { content: "✓"; color: var(--blue); font-weight: 700; }
    .includes-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .includes-list li { display: flex; align-items: center; gap: 8px; font-size: 14px; }
    .includes-list li::before { content: "✓"; color: var(--green); font-weight: 700; }
    .sidebar-box { border: 1px solid var(--gray-border); border-radius: var(--radius);
      padding: 1.25rem; margin-bottom: 1rem; }
    .sidebar-price-label { font-size: 12px; color: var(--gray); margin-bottom: 4px; }
    .sidebar-price { font-size: 2rem; font-weight: 800; color: var(--blue); margin-bottom: 1rem; }
    .sidebar-box h4 { font-size: 14px; font-weight: 700; margin-bottom: .5rem; }
    .sidebar-box > p { font-size: 13px; color: var(--gray); margin-bottom: 1rem; }
    .fav-toggle-btn { background: var(--gray-light); color: var(--gray);
      border: 1px solid var(--gray-border); margin-top: .5rem; }
    .fav-toggle-btn.fav-active { background: #fee2e2; color: var(--red); border-color: #fca5a5; }
    .others-section { padding-top: 2rem; }
    .others-section h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    .others-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
    @media (max-width: 900px) { .detail-layout { grid-template-columns: 1fr; } .others-grid { grid-template-columns: repeat(2,1fr); } }
  `]
})
export class DetalleComponent implements OnInit {
  servicio: Servicio | undefined;
  otrosServicios: Servicio[] = [];
  esFav = false;
  private favIds = new Set<number>();
  private todosServicios: Servicio[] = [];

  constructor(private route: ActivatedRoute, private svc: ServiciosService, private toast: ToastService) {}

  ngOnInit() {
    this.svc.getServicios().subscribe(ss => { this.todosServicios = ss; this.cargarDetalle(); });
    this.svc.favoritos$.subscribe(f => { this.favIds = f; if (this.servicio) this.esFav = f.has(this.servicio.id); });
    this.route.params.subscribe(() => this.cargarDetalle());
  }

  private cargarDetalle() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.servicio = this.todosServicios.find(s => s.id === id);
    this.esFav = this.favIds.has(id);
    this.otrosServicios = this.todosServicios.filter(s => s.id !== id).slice(0, 3);
  }

  toggleFav() {
    if (!this.servicio) return;
    this.svc.toggleFavorito(this.servicio.id);
    this.esFav = !this.esFav;
    this.toast.show(this.esFav ? '¡Agregado a favoritos! ❤️' : 'Eliminado de favoritos');
  }

  toggleFavById(id: number) {
    this.svc.toggleFavorito(id);
    this.toast.show('Favorito actualizado');
  }

  esFavId(id: number): boolean { return this.favIds.has(id); }
  onImgErr(e: Event) { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70"; }
}