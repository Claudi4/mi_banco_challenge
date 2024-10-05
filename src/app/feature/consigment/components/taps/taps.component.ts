import { Component } from '@angular/core';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrl: './taps.component.scss'
})
export class TapsComponent {
  sendListItems = [
    `<strong>Acércate a una de las 5 agencias</strong> con tu DNI.`,
    `Ten a la mano los <strong>datos personales del destinatario.</strong>`,
    `Realiza con nosotros <strong>el cambio de moneda del monto</strong> que enviarás.`,
    `Finalmente, pronto el dinero <strong>llegará a su destino.</strong>`
  ];

  recieveListItems = [
    `<strong>Acércate a una de las 5 agencias</strong> con tu Documento de Identidad.`,
    `<strong>Indica el código MTCN</strong> de 10 dígitos.`,
    `<strong>Responde unas preguntas</strong> de validación.`,
    `<strong>Indica en qué moneda</strong> quieres recibir tu dinero. ¡Y listo!`
  ];

  downloadPdf() {
    window.open('https://firebasestorage.googleapis.com/v0/b/prueba-70d61.appspot.com/o/TarifarioWU.pdf?alt=media&token=eac04dd5-d735-4299-ae66-080cc14313ac', "_blank");
  }
}
