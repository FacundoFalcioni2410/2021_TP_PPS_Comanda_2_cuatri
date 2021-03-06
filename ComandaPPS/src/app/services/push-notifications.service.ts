import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import{
  LocalNotifications,
  ActionPerformed as localNotificationActionPerformed
} from '@capacitor/local-notifications'

import { Platform } from '@ionic/angular';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService  {

  constructor(private router: Router, private platform: Platform, private userService: AuthService) {
    this.inicializar();
  }

  inicializar(){
    if(this.platform.is('capacitor'))
    {
      PushNotifications.register();
      this.addListeners();
    }
  }

  addListeners(){
    PushNotifications.addListener('registration', (token: Token) => {
      this.userService.guardarToken(this.userService.usuarioActual, this.userService.tipoUsuario, token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
       
        LocalNotifications.schedule({
          notifications:[
            {
            title: notification.title,
            body: notification.body,
            id: 1,
            extra:{
              data: notification.data
            }
          }
        ]})
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        this.router.navigate([notification.notification.data.ruta]);

      },
    );

    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (notification: localNotificationActionPerformed) => {
        this.router.navigate([notification.notification.extra.data.ruta]);
      },
    );
  }
}