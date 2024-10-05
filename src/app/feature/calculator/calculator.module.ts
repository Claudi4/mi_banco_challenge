import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './views/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputNumberModule,
    Button,
    DropdownModule
  ]
})
export class CalculatorModule { }
