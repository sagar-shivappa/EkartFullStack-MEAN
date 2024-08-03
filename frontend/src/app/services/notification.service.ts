import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastSubject = new Subject<string>();

  toastState = this.toastSubject.asObservable();

  constructor() { }

  showToast(message: string) {
    this.toastSubject.next(message);
    setTimeout(() => this.clearToast(), 5000); // Automatically clear after 5 seconds
  }

  clearToast() {
    this.toastSubject.next('');
  }
}
