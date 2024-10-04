import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsigmentRoutingModule } from './consigment-routing.module';
import { BubbleListComponent } from './components/bubble-list/bubble-list.component';


@NgModule({
  declarations: [
    BubbleListComponent
  ],
  imports: [
    CommonModule,
    ConsigmentRoutingModule
  ]
})
export class ConsigmentModule { }
