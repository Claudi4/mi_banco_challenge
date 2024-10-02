import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanFormComponent } from './views/loan-form/loan-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
