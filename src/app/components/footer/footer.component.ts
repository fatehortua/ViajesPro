import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:.5rem">
            <div style="width:32px;height:32px;border-radius:8px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:16px">✈️</div>
            <strong style="color:white;font-size:15px">ViajesPro</strong>
          </div>
          <p>Tu agencia de viajes de confianza desde 2010.</p>
          <div class="footer-social"><a href="#">f</a><a href="#">ig</a><a href="#">tw</a></div>
        </div>
        <div class="footer-col">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a routerLink="/">Inicio</a></li>
            <li><a routerLink="/servicios">Servicios</a></li>
            <li><a routerLink="/favoritos">Favoritos</a></li>
            <li><a routerLink="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Destinos Populares</h4>
          <ul><li><a>Europa</a></li><li><a>Asia</a></li><li><a>América</a></li></ul>
        </div>
        <div class="footer-col">
          <h4>Contacto</h4>
          <div class="footer-contact-item">📍 Calle Mayor 123, Madrid</div>
          <div class="footer-contact-item">📞 +34 900 123 456</div>
          <div class="footer-contact-item">✉️ info&#64;viajespro.com</div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 ViajesPro. Todos los derechos reservados.</p>
        <div class="footer-links"><a>Privacidad</a><a>Términos</a><a>Cookies</a></div>
      </div>
    </footer>
  `
})
export class FooterComponent {}