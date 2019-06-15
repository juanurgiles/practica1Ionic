import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  titulo = 'Contactos';
  nombre;
  cedula;
  direccion;
  correo;

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contacto',
      subHeader: 'Mensaje Enviado',
      message: 'Contacto:.'+this.nombre,
      buttons: ['OK']
    });

    await alert.present();
  }
}
