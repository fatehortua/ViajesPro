import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

@Injectable({ providedIn: 'root' })
export class ServiciosService {
  private serviciosSubject = new BehaviorSubject<Servicio[]>([]);
  servicios$ = this.serviciosSubject.asObservable();

  private favoritosSubject = new BehaviorSubject<Set<number>>(new Set());
  favoritos$ = this.favoritosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Servicio[]>('assets/data/servicios.json')
      .subscribe(data => this.serviciosSubject.next(data));
  }

  getServicios(): Observable<Servicio[]> { return this.servicios$; }

  getServicioById(id: number): Servicio | undefined {
    return this.serviciosSubject.getValue().find(s => s.id === id);
  }

  agregarServicio(servicio: Omit<Servicio, "id">): void {
    const actual = this.serviciosSubject.getValue();
    const nuevo: Servicio = {
      ...servicio,
      id: Date.now(),
      caracteristicas: servicio.caracteristicas?.length ? servicio.caracteristicas : ['Servicio premium', 'Atención personalizada'],
      incluye: servicio.incluye?.length ? servicio.incluye : ['Asesoría personalizada', 'Soporte durante el servicio']
    };
    this.serviciosSubject.next([...actual, nuevo]);
  }

  eliminarServicio(id: number): void {
    this.serviciosSubject.next(this.serviciosSubject.getValue().filter(s => s.id !== id));
    const favs = new Set(this.favoritosSubject.getValue());
    favs.delete(id);
    this.favoritosSubject.next(favs);
  }

  toggleFavorito(id: number): void {
    const favs = new Set(this.favoritosSubject.getValue());
    if (favs.has(id)) { favs.delete(id); } else { favs.add(id); }
    this.favoritosSubject.next(favs);
  }

  getFavoritos(): Servicio[] {
    const favIds = this.favoritosSubject.getValue();
    return this.serviciosSubject.getValue().filter(s => favIds.has(s.id));
  }

  limpiarFavoritos(): void { this.favoritosSubject.next(new Set()); }
}