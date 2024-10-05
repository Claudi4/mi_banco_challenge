import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  internHeader = false;
  constructor(private readonly router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.internHeader = currentRoute.includes('remesa') || currentRoute.includes('calculadora');
      }
    });
  }
  goHome() {
    this.internHeader = false;
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
