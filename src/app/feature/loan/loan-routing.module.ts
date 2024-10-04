import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanFormComponent } from './views/loan-form/loan-form.component';
import { AnnouncementsComponent } from './views/announcements/announcements.component';

const routes: Routes = [
  {
    path: '',
    component: LoanFormComponent
  },
  {
    path: 'anuncio',
    component: AnnouncementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
