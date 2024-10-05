import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-list',
  templateUrl: './bubble-list.component.html',
  styleUrl: './bubble-list.component.scss'
})
export class BubbleListComponent {
  @Input()items: string[] = [];
}
