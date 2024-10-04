import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent implements OnInit {
  status: string = '';
  name: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.status = params['status'];
      this.name = params['firstName'];
    });
  }

  goHome() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
