import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsigmentRoutingModule } from './consigment-routing.module';
import { BubbleListComponent } from './components/bubble-list/bubble-list.component';
import { LandingComponent } from './views/landing/landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { TapsComponent } from './components/taps/taps.component';
import { TabViewModule } from 'primeng/tabview';
import { Button } from 'primeng/button';


@NgModule({
  declarations: [
    BubbleListComponent,
    LandingComponent,
    HeroComponent,
    TapsComponent
  ],
  imports: [
    CommonModule,
    ConsigmentRoutingModule,
    TabViewModule,
    Button
  ]
})
export class ConsigmentModule { }
