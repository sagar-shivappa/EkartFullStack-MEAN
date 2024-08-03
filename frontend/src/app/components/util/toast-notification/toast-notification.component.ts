// toast-notification.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent implements OnInit, OnDestroy {
  toastMessage: Observable<any> = new Observable();
  private subscription: Subscription = new Subscription();

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.toastMessage = this.notificationService.toastState
    this.subscription = this.notificationService.toastState.subscribe(message => {
      // this.toastMessage = message;
      if (message) {
        setTimeout(() => this.clearToast(), 5000); // Automatically clear after 5 seconds
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearToast() {
    this.notificationService.clearToast();
  }
}
