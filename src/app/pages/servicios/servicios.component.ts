import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Servicio } from '../../models/servicio.model';
import { ServiciosService } from '../../services/servicios.service';
import { ToastService } from '../../services/toast.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ServiceCardComponent, FooterComponent],
  template: `
    <div class="section">
      <div class="services-header">
        <div><h1>Catálogo de Servicios</h1><p>Explora todos nuestros servicios de viaje disponibles</p></div>
        <button class="btn btn-green" (click)="abrirModal()">+ Nuevo Servicio</button>
      </div>
      <div class="services-grid" *ngIf="servicios.length > 0; else empty">
        <app-service-card
          *ngFor="let s of servicios"
          [servicio]="s"
          [esFavorito]="esFav(s.id)"
          [mostrarEliminar]="true"
          (toggleFav)="toggleFav($event)"
          (eliminar)="eliminar($event)">
        </app-service-card>
      </div>
      <ng-template #empty><p class="empty-msg">No hay servicios. ¡Crea el primero!</p></ng-template>
    </div>
    <div class="modal-overlay" *ngIf="modalAbierto" (click)="cerrarModalFuera($event)">
      <div class="modal">
        <div class="modal-header">
          <h2>Crear Nuevo Servicio</h2>
          <button class="modal-close" (click)="cerrarModal()">✕</button>
        </div>
        <form #f="ngForm" (ngSubmit)="guardarServicio(f)">
          <div class="form-group">
            <label class="form-label">Nombre del Servicio *</label>
            <input class="form-input" name="nombre" [(ngModel)]="form.nombre" required
                   placeholder="Ej: Vuelos Internacionales"
                   [class.campo-error]="f.submitted && !form.nombre"/>
            <div class="form-error" *ngIf="f.submitted && !form.nombre">El nombre es obligatorio</div>
          </div>
          <div class="form-group">
            <label class="form-label">Descripción Breve *</label>
            <textarea class="form-textarea" name="descripcion" [(ngModel)]="form.descripcion"
                      required placeholder="Descripción corta del servicio"
                      [class.campo-error]="f.submitted && !form.descripcion"></textarea>
            <div class="form-error" *ngIf="f.submitted && !form.descripcion">La descripción es obligatoria</div>
          </div>
          <div class="form-group">
            <label class="form-label">Descripción Completa</label>
            <textarea class="form-textarea" name="descripcionCompleta" [(ngModel)]="form.descripcionCompleta"
                      placeholder="Descripción detallada"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Precio *</label>
              <input class="form-input" name="precio" [(ngModel)]="form.precio" required
                     placeholder="Ej: Desde €299"
                     [class.campo-error]="f.submitted && !form.precio"/>
              <div class="form-error" *ngIf="f.submitted && !form.precio">El precio es obligatorio</div>
            </div>
            <div class="form-group">
              <label class="form-label">Categoría</label>
              <input class="form-input" name="categoria" [(ngModel)]="form.categoria" placeholder="Ej: Transporte"/>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">URL de Imagen</label>
            <input class="form-input" name="imagen" [(ngModel)]="form.imagen" placeholder="https://..."/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="cerrarModal()">Cancelar</button>
            <button type="submit" class="btn btn-green">Crear Servicio</button>
          </div>
        </form>
      </div>
    </div>
    <app-footer />
  `,
  styles: [`
    .services-header { display: flex; align-items: flex-start; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
    .services-header h1 { font-size: 2rem; font-weight: 800; }
    .services-header p { color: var(--gray); font-size: 14px; margin-top: 4px; }
    .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .empty-msg { color: var(--gray); text-align: center; padding: 3rem; }
    @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }
  `]
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];
  favoritosIds = new Set<number>();
  modalAbierto = false;
  form = { nombre: '', descripcion: '', descripcionCompleta: '', precio: '', categoria: '', imagen: '' };

  constructor(private svc: ServiciosService, private toast: ToastService) {}

  ngOnInit() {
    this.svc.getServicios().subscribe(s => this.servicios = s);
    this.svc.favoritos$.subscribe(f => this.favoritosIds = f);
  }

  esFav(id: number): boolean { return this.favoritosIds.has(id); }

  toggleFav(id: number) {
    this.svc.toggleFavorito(id);
    this.toast.show(this.favoritosIds.has(id) ? 'Eliminado de favoritos' : '¡Agregado a favoritos! ❤️');
  }

  eliminar(id: number) {
    if (!confirm('¿Seguro que quieres eliminar este servicio?')) return;
    this.svc.eliminarServicio(id);
    this.toast.show('Servicio eliminado');
  }

  abrirModal() {
    this.form = { nombre: '', descripcion: '', descripcionCompleta: '', precio: '', categoria: '', imagen: '' };
    this.modalAbierto = true;
  }

  cerrarModal() { this.modalAbierto = false; }

  cerrarModalFuera(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) this.cerrarModal();
  }

  guardarServicio(f: NgForm) {
    if (f.invalid) return;
    this.svc.agregarServicio({
      nombre: this.form.nombre,
      descripcion: this.form.descripcion,
      descripcionCompleta: this.form.descripcionCompleta || this.form.descripcion,
      precio: this.form.precio,
      categoria: this.form.categoria || 'General',
      imagen: this.form.imagen || 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70',
      caracteristicas: [],
      incluye: []
    });
    this.cerrarModal();
    this.toast.show('¡Servicio creado exitosamente! ✅');
  }
}