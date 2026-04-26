import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  template: `<div class="toast" [ngClass]="{ show: visible }">{{ message }}</div>`,
  styles: [`
    .toast { position: fixed; bottom: 2rem; right: 2rem; background: var(--dark);
      color: white; padding: .75rem 1.25rem; border-radius: var(--radius-sm);
      font-size: 14px; font-weight: 500; opacity: 0; transform: translateY(10px);
      pointer-events: none; transition: all .3s; z-index: 1000; }
    .toast.show { opacity: 1; transform: translateY(0); }
  `]
})
export class ToastComponent implements OnInit {
  message = '';
  visible = false;
  constructor(private toast: ToastService) {}
  ngOnInit() {
    this.toast.message$.subscribe(m => this.message = m);
    this.toast.visible$.subscribe(v => this.visible = v);
  }
}