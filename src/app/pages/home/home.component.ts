import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, FooterComponent],
    template: `
    <div class="hero">
      <div class="hero-content">
        <h1>Descubre el Mundo con ViajesPro</h1>
        <p>Tu agencia de viajes de confianza con más de 15 años de experiencia</p>
        <div class="hero-btns">
          <a class="btn btn-secondary" routerLink="/servicios">Ver Servicios →</a>
          <a class="btn btn-outline" routerLink="/contacto">Contactar</a>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        <h2>Servicios Destacados</h2>
        <p>Todo lo que necesitas para tu viaje perfecto</p>
      </div>
      <div class="featured-grid">
        <div class="featured-card"><div class="featured-icon">✈️</div><h3>Vuelos</h3><p>500+ aerolíneas</p><a routerLink="/servicios">Ver más →</a></div>
        <div class="featured-card"><div class="featured-icon">🏨</div><h3>Hoteles</h3><p>100,000+ alojamientos</p><a routerLink="/servicios">Ver más →</a></div>
        <div class="featured-card"><div class="featured-icon">🗺️</div><h3>Tours</h3><p>Guías certificados</p><a routerLink="/servicios">Ver más →</a></div>
        <div class="featured-card"><div class="featured-icon">🛡️</div><h3>Seguro</h3><p>Viaja con tranquilidad</p><a routerLink="/servicios">Ver más →</a></div>
      </div>
      <div style="text-align:center">
        <a class="btn btn-primary" routerLink="/servicios">Ver Todos los Servicios →</a>
      </div>
    </div>
    <div class="stats-bar">
      <div class="stats-inner">
        <div><div class="stat-value">50K+</div><div class="stat-label">Clientes Felices</div></div>
        <div><div class="stat-value">150+</div><div class="stat-label">Destinos</div></div>
        <div><div class="stat-value">15+</div><div class="stat-label">Años de Experiencia</div></div>
        <div><div class="stat-value">98%</div><div class="stat-label">Satisfacción</div></div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <p>Testimonios reales de viajeros satisfechos</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p>"Excelente servicio en nuestro viaje a París"</p><strong>María González</strong></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p>"Mejores precios y atención personalizada"</p><strong>Carlos Ruiz</strong></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p>"Nuestra luna de miel fue increíble"</p><strong>Ana Martínez</strong></div>
      </div>
    </div>
    <div class="cta-section">
      <div class="cta-icon">📈</div>
      <h2>¿Listo para tu Próxima Aventura?</h2>
      <p>Contáctanos hoy y comienza a planificar el viaje de tus sueños</p>
      <div class="cta-btns">
        <a class="btn btn-primary" routerLink="/servicios">Explorar Servicios</a>
<<<<<<< HEAD
        <a class="btn btn-secondary" routerLink="/contacto">Solicitar Cotización</a>
=======
>>>>>>> 7881f349d69a98351e6d21b7d6216cf9bc243679
      </div>
    </div>
    <app-footer />
  `,
    styles: [`
    .hero { background: linear-gradient(135deg, #2a46e0 0%, #3b5bfc 50%, #5b7fff 100%);
      min-height: 380px; display: flex; align-items: center; justify-content: center;
      text-align: center; padding: 4rem 2rem; position: relative; overflow: hidden; }
    .hero::before { content: ""; position: absolute; inset: 0;
      background: url("https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=70") center/cover;
      opacity: .18; }
    .hero-content { position: relative; z-index: 1; max-width: 600px; }
    .hero h1 { font-size: 3rem; font-weight: 800; color: white; line-height: 1.15; margin-bottom: 1rem; }
    .hero p { color: rgba(255,255,255,.85); font-size: 1.1rem; margin-bottom: 2rem; }
    .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .featured-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-bottom: 2rem; }
    .featured-card { border: 1px solid var(--gray-border); border-radius: var(--radius);
      padding: 1.5rem; text-align: center; transition: box-shadow .2s, transform .2s; }
    .featured-card:hover { box-shadow: var(--shadow); transform: translateY(-3px); }
    .featured-icon { font-size: 2rem; margin-bottom: .75rem; }
    .featured-card h3 { font-size: 15px; font-weight: 700; margin-bottom: .25rem; }
    .featured-card p { font-size: 12px; color: var(--gray); margin-bottom: .75rem; }
    .featured-card a { font-size: 13px; color: var(--blue); font-weight: 600; text-decoration: none; }
    .stats-bar { background: var(--blue); color: white; padding: 3rem 2rem; }
    .stats-inner { max-width: 1200px; margin: 0 auto; display: grid;
      grid-template-columns: repeat(4,1fr); text-align: center; gap: 2rem; }
    .stat-value { font-size: 2.5rem; font-weight: 800; }
    .stat-label { font-size: 13px; opacity: .8; margin-top: 4px; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .testimonial-card { border: 1px solid var(--gray-border); border-radius: var(--radius); padding: 1.5rem; }
    .stars { color: #f59e0b; font-size: 16px; margin-bottom: .75rem; }
    .testimonial-card p { font-size: 14px; font-style: italic; margin-bottom: 1rem; }
    .testimonial-card strong { font-size: 13px; font-weight: 700; }
    .cta-section { text-align: center; padding: 4rem 2rem; border-top: 1px solid var(--gray-border); }
    .cta-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .cta-section h2 { font-size: 2rem; font-weight: 800; margin-bottom: .5rem; }
    .cta-section p { color: var(--gray); margin-bottom: 2rem; }
    .cta-btns { display: flex; gap: 12px; justify-content: center; }
    @media (max-width: 900px) {
      .featured-grid { grid-template-columns: repeat(2,1fr); }
      .testimonials-grid { grid-template-columns: repeat(2,1fr); }
      .stats-inner { grid-template-columns: repeat(2,1fr); }
    }
    @media (max-width: 600px) {
      .hero h1 { font-size: 2rem; }
      .featured-grid, .testimonials-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HomeComponent { }