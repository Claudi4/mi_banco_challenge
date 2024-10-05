import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mb-button',
  templateUrl: './mb-button.component.html',
  styleUrl: './mb-button.component.scss'
})
export class MbButtonComponent {
  @Input()loading?: boolean = false;
  @Input()disabled?: boolean = true;
  @Input()label?: string = '';
  @Input()type?: string = '';
  @Input()icon?: string = '';
  @Input()pos?: any = '';
  @Input()size?: 'small' | 'large' = 'small';
  @Input()styleClass?: string = '';
  @Output()handleCLick = new EventEmitter<void>();

  constructor() { }

  handleClick() {
    this.handleCLick.emit();
  }
}
