import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-list',
  templateUrl: './bubble-list.component.html',
  styleUrl: './bubble-list.component.scss'
})
export class BubbleListComponent {
  steps = [
    { description: 'Acércate a una c' },
    { description: 'Ten a la mano los' },
    { description: 'Realiza con nosc' },
    { description: 'Finalmente, pro' }
  ];
}
