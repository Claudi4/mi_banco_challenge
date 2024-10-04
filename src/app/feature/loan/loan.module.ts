import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanFormComponent } from './views/loan-form/loan-form.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { AnnouncementsComponent } from './views/announcements/announcements.component';
import { ConsigmentModule } from '../consigment/consigment.module';

@NgModule({
  declarations: [
    LoanFormComponent,
    BenefitsComponent,
    AnnouncementsComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DropdownModule,
    InputMaskModule,
    ConsigmentModule
  ]
})
export class LoanModule { }
