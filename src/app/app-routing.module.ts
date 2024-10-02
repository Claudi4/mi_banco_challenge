import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prestamo',
    loadChildren: () => import('./feature/loan/loan.module').then(m => m.LoanModule)
  },
  {
    path: 'remesa',
    loadChildren: () => import('./feature/consigment/consigment.module').then(m => m.ConsigmentModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./feature/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: '',
    redirectTo: 'prestamo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
