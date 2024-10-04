import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MbButtonComponent } from './components/mb-button/mb-button.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MbButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MbButtonComponent
  ]
})
export class SharedModule { }
