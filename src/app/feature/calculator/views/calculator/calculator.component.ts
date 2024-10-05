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
  sell: number = 0;
  buy: number = 0;
  changeType: number = 0;
  isSellFirst: boolean = true;
  currencyBase = 'USD';
  coins:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      origen: new FormControl(0, Validators.required),
      destino: new FormControl({ value: '', disabled: true })
    });

    this.getChangeType();
  }

  getChangeType(): void {
    this.http.get(`https://api.exchangerate-api.com/v4/latest/${this.currencyBase}`)
      .subscribe((response: any) => {
        this.changeType = response.rates.PEN;
        this.coins = Object.entries(response.rates).map(([key, value]) => ({ key, value }));
        this.sell = this.changeType;
        this.buy = this.changeType * 1.05;
        this.convert();
      });
  }

  convert(): void {
    const valorOrigen = this.form.get('origen').value;
    const valorDestino = this.isSellFirst ? (valorOrigen * this.changeType) : (valorOrigen / this.buy);
    this.form.get('destino').setValue(valorDestino);
  }

  interchange(): void {
    this.isSellFirst = !this.isSellFirst;
    const valorOrigen = this.form.get('origen').value;
    const valorDestino = this.form.get('destino').value;
    this.form.get('origen').setValue(valorDestino);
    this.form.get('destino').setValue(valorOrigen);
    this.convert();
  }

  changeCurrency(event: any) {
    this.currencyBase = event.value.key;
    this.getChangeType();
  }
}
