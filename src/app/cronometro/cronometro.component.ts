import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent {
  segundos: number = 0;
  minutos: number = 0;
  intervalo: number | undefined = undefined;

  iniciar() {
    if (!this.intervalo) {
      this.intervalo = setInterval(() => {
        this.segundos++;
        if (this.segundos === 60) {
          this.minutos++;
          this.segundos = 0;
        }
      }, 1000);
    }
  }

  pausar() {
    clearInterval(this.intervalo);
    this.intervalo = undefined;    
  }

  resetar() {
    this.pausar();
    this.segundos = 0;
    this.minutos = 0;
  }
}
