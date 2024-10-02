import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanFormComponent } from './views/loan-form/loan-form.component';
import { BenefitsComponent } from './components/benefits/benefits.component';


@NgModule({
  declarations: [
    LoanFormComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
