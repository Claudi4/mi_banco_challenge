import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {
  form: any;
  venta: number = 0;
  compra: number = 0;
  tipoCambio: number = 0;
  isVentaFirst: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      origen: new FormControl(0, Validators.required),
      destino: new FormControl({ value: '', disabled: true })
    });

    this.obtenerTipoCambio();
  }

  obtenerTipoCambio(): void {
    this.http.get('https://api.exchangerate-api.com/v4/latest/USD')
      .subscribe((response: any) => {
        this.tipoCambio = response.rates.PEN;
        this.venta = this.tipoCambio;
        this.compra = this.tipoCambio * 1.05;
      });
  }

  convertir(): void {
    const valorOrigen = this.form.get('origen').value;
    const valorDestino = this.isVentaFirst ? (valorOrigen * this.tipoCambio) : (valorOrigen / this.compra);
    this.form.get('destino').setValue(valorDestino);
  }

  intercambiar(): void {
    this.isVentaFirst = !this.isVentaFirst;
    const valorOrigen = this.form.get('origen').value;
    const valorDestino = this.form.get('destino').value;
    console.log('ORIG', valorOrigen);
    console.log('DEST', valorDestino);
    
    this.form.get('origen').setValue(valorDestino);
    this.form.get('destino').setValue(valorOrigen);
    // this.tipoCambio = 1 / this.tipoCambio;
    console.log('TCambio', this.tipoCambio);
    
    console.log('ewef', this.venta, this.compra);
    this.convertir();

    
  }
}
