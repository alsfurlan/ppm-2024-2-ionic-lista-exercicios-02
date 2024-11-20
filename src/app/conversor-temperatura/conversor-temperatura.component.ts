import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrls: ['./conversor-temperatura.component.scss']
})
export class ConversorTemperaturaComponent {
  temperatura: number | null = null;
  converterPara: string = '';
  resultado: number | null = null;

  converter() {
    if (this.temperatura === null || this.converterPara === '') return;

    if (this.converterPara === 'Fahrenheit') {
      this.resultado = (this.temperatura * 9) / 5 + 32;
    } else if (this.converterPara === 'Kelvin') {
      this.resultado = this.temperatura + 273.15;
    }
  }
}
