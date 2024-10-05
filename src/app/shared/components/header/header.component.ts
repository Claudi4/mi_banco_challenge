import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  internHeader = false;
  constructor(@Inject(DOCUMENT) document: any, private readonly router: Router) {
    document.location.href.includes('remesa') || document.location.href.includes('calculadora') ? this.internHeader = true : this.internHeader = false;
  }

  goHome() {
    this.internHeader = false;
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
