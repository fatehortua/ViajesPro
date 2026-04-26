import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  template: `
    <nav>
      <a class="nav-brand" routerLink="/">
        <div class="nav-logo">✈️</div>
        <div class="nav-brand-text">
          <strong>ViajesPro</strong>
          <span>Tu agencia de confianza</span>
        </div>
      </a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a routerLink="/servicios" routerLinkActive="active">Servicios</a>
        <a routerLink="/favoritos" routerLinkActive="active">
          Favoritos
          <span class="nav-badge" *ngIf="favCount > 0">{{ favCount }}</span>
        </a>
        <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
      </div>
      <a routerLink="/favoritos" class="nav-fav-icon">
        🤍
        <span class="nav-badge fav-abs" *ngIf="favCount > 0">{{ favCount }}</span>
      </a>
    </nav>
  `,
  styles: [`
    nav { position: sticky; top: 0; z-index: 100; background: white;
      border-bottom: 1px solid var(--gray-border); padding: 0 2rem; height: 64px;
      display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .nav-logo { width: 38px; height: 38px; border-radius: 10px; background: var(--blue);
      display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .nav-brand-text { display: flex; flex-direction: column; line-height: 1.1; }
    .nav-brand-text strong { font-size: 15px; font-weight: 700; color: var(--dark); }
    .nav-brand-text span { font-size: 11px; color: var(--gray); }
    .nav-links { display: flex; gap: 2rem; align-items: center; }
    .nav-links a { text-decoration: none; color: var(--gray); font-size: 14px;
      font-weight: 500; transition: color .2s; position: relative; }
    .nav-links a:hover, .nav-links a.active { color: var(--blue); }
    .nav-links a.active::after { content: ""; position: absolute; bottom: -22px;
      left: 0; right: 0; height: 2px; background: var(--blue); border-radius: 2px; }
    .nav-badge { background: var(--red); color: white; font-size: 10px; font-weight: 700;
      border-radius: 50%; width: 18px; height: 18px; display: inline-flex;
      align-items: center; justify-content: center; margin-left: 4px; vertical-align: top; }
    .nav-fav-icon { width: 38px; height: 38px; border-radius: 50%;
      background: var(--gray-light); display: flex; align-items: center;
      justify-content: center; font-size: 18px; position: relative; text-decoration: none; }
    .nav-fav-icon:hover { background: #fee2e2; }
    .fav-abs { position: absolute; top: -2px; right: -2px; margin: 0; }
  `]
})
export class NavbarComponent implements OnInit {
  favCount = 0;
  constructor(private svc: ServiciosService) {}
  ngOnInit() { this.svc.favoritos$.subscribe(f => this.favCount = f.size); }
}