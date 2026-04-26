import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [RouterLink, NgIf, FormsModule, FooterComponent],
    template: `
    <div class="contact-title">
      <h1>Contáctanos</h1>
      <p>Estamos aquí para ayudarte a planificar tu viaje perfecto</p>
    </div>
    <div class="contact-layout">
      <div>
        <div class="contact-info-box">
          <h3>Información de Contacto</h3>
          <div class="info-item"><div class="info-icon">📍</div><div><h4>Dirección</h4><p>Calle Mayor 123, 28013 Madrid, España</p></div></div>
          <div class="info-item"><div class="info-icon">📞</div><div><h4>Teléfono</h4><p>+34 900 123 456</p></div></div>
          <div class="info-item"><div class="info-icon">✉️</div><div><h4>Email</h4><p>info&#64;viajespro.com</p></div></div>
          <div class="info-item"><div class="info-icon">🕐</div><div><h4>Horario</h4><p>Lun-Vie: 9:00-20:00 | Sáb: 10:00-14:00</p></div></div>
          <div class="asistencia-box">
            <h3>Asistencia 24/7</h3>
            <p>Disponibles para ayudarte durante tu viaje.</p>
            <button class="btn-llamar">📞 Llamar Ahora</button>
          </div>
        </div>
      </div>
      <div class="contact-form-box">
        <h3>Envíanos un Mensaje</h3>
        <form #f="ngForm" (ngSubmit)="enviar(f)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Nombre Completo *</label>
              <input class="form-input" name="nombre" [(ngModel)]="form.nombre" required
                     placeholder="Tu nombre" [class.campo-error]="f.submitted && !form.nombre"/>
              <div class="form-error" *ngIf="f.submitted && !form.nombre">El nombre es obligatorio</div>
            </div>
            <div class="form-group">
              <label class="form-label">Email *</label>
              <input class="form-input" name="email" [(ngModel)]="form.email" required email
                     placeholder="tu@email.com" [class.campo-error]="f.submitted && f.controls['email']?.invalid"/>
              <div class="form-error" *ngIf="f.submitted && f.controls['email']?.invalid">Email inválido</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Teléfono</label>
              <input class="form-input" name="telefono" [(ngModel)]="form.telefono" placeholder="+34 600 000 000"/>
            </div>
            <div class="form-group">
              <label class="form-label">Asunto</label>
              <input class="form-input" name="asunto" [(ngModel)]="form.asunto" placeholder="Motivo de consulta"/>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Mensaje *</label>
            <textarea class="form-textarea" name="mensaje" [(ngModel)]="form.mensaje" required
                      placeholder="Escribe tu mensaje aquí..." style="min-height:120px"
                      [class.campo-error]="f.submitted && !form.mensaje"></textarea>
            <div class="form-error" *ngIf="f.submitted && !form.mensaje">El mensaje es obligatorio</div>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="padding:.85rem">✉️ Enviar Mensaje</button>
        </form>
      </div>
    </div>
    <div class="map-placeholder">
      <div class="map-box"><div class="map-icon">📍</div><p>Ubicación en Mapa</p><small>Calle Mayor 123, Madrid</small></div>
    </div>
    <app-footer />
  `,
    styles: [`
    .contact-title { text-align: center; padding: 3rem 2rem 2rem; }
    .contact-title h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: .5rem; }
    .contact-title p { color: var(--gray); }
    .contact-layout { max-width: 1000px; margin: 0 auto; padding: 0 2rem 3rem;
      display: grid; grid-template-columns: 300px 1fr; gap: 2rem; }
    .contact-info-box { border: 1px solid var(--gray-border); border-radius: var(--radius); padding: 1.5rem; }
    .contact-info-box > h3 { font-size: 15px; font-weight: 700; color: var(--blue); margin-bottom: 1.25rem; }
    .info-item { display: flex; gap: 12px; margin-bottom: 1.25rem; }
    .info-icon { width: 36px; height: 36px; border-radius: 50%; background: var(--blue-light);
      display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
    .info-item h4 { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
    .info-item p { font-size: 13px; color: var(--gray); line-height: 1.5; }
    .asistencia-box { background: var(--blue); border-radius: var(--radius);
      padding: 1.25rem; margin-top: 1.25rem; color: white; }
    .asistencia-box h3 { font-size: 15px; font-weight: 700; margin-bottom: .5rem; }
    .asistencia-box p { font-size: 13px; opacity: .9; margin-bottom: 1rem; }
    .btn-llamar { background: white; color: var(--blue); border: none; padding: .6rem 1rem;
      border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; font-family: inherit; }
    .contact-form-box { border: 1px solid var(--gray-border); border-radius: var(--radius); padding: 1.5rem; }
    .contact-form-box h3 { font-size: 15px; font-weight: 700; margin-bottom: 1.25rem; }
    .map-placeholder { max-width: 1000px; margin: 0 auto 3rem; padding: 0 2rem; }
    .map-box { border: 1px solid var(--gray-border); border-radius: var(--radius);
      height: 200px; background: var(--gray-light); display: flex; align-items: center;
      justify-content: center; flex-direction: column; color: var(--gray); }
    .map-icon { font-size: 2rem; margin-bottom: .5rem; }
    .map-box p { font-size: 14px; font-weight: 600; }
    @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; } }
  `]
})
export class ContactoComponent {
    form = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
    constructor(private toast: ToastService) { }
    enviar(f: NgForm) {
        if (f.invalid) return;
        f.resetForm(); this.form = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
        this.toast.show('¡Mensaje enviado correctamente! ✅');
    }
}