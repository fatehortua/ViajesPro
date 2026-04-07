import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf],
  template: `
    <div class="service-card">
      <div class="service-card-img">
        <img [src]="servicio.imagen" [alt]="servicio.nombre"
             (error)="onImgError($event)" loading="lazy"/>
        <span class="badge" [ngClass]="'badge-' + servicio.categoria">
          {{ servicio.categoria }}
        </span>
        <div class="card-actions">
          <button class="card-btn card-btn-fav" [ngClass]="{ active: esFavorito }"
                  (click)="$event.stopPropagation(); toggleFav.emit(servicio.id)"
                  [title]="esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'">
            {{ esFavorito ? '❤️' : '🤍' }}
          </button>
          <button *ngIf="mostrarEliminar" class="card-btn card-btn-del"
                  (click)="$event.stopPropagation(); eliminar.emit(servicio.id)">
            🗑️
          </button>
        </div>
      </div>
      <div class="service-card-body">
        <h3>{{ servicio.nombre }}</h3>
        <p>{{ servicio.descripcion }}</p>
        <div class="service-price">{{ servicio.precio }}</div>
        <a class="btn btn-dark btn-block" [routerLink]="['/servicios', servicio.id]">
          Ver Detalles →
        </a>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() servicio!: Servicio;
  @Input() esFavorito = false;
  @Input() mostrarEliminar = true;
  @Output() toggleFav = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  onImgError(event: Event) {
    (event.target as HTMLImageElement).src =
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70';
  }
}