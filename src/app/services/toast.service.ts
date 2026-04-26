import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private messageSubject = new BehaviorSubject<string>('');
  private visibleSubject = new BehaviorSubject<boolean>(false);
  message$ = this.messageSubject.asObservable();
  visible$ = this.visibleSubject.asObservable();
  private timeout: any;

  show(message: string): void {
    this.messageSubject.next(message);
    this.visibleSubject.next(true);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.visibleSubject.next(false), 3000);
  }
}