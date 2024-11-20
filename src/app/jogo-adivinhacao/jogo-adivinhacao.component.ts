import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo-adivinhacao',
  templateUrl: './jogo-adivinhacao.component.html',
  styleUrls: ['./jogo-adivinhacao.component.scss']
})
export class JogoAdivinhacaoComponent {
  numeroSecreto: number = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes: number = 10;
  palpite: number | null = null;
  mensagem: string = '';
  jogoFinalizado: boolean = false;

  verificarPalpite() {
    if (this.palpite === null) {
      this.mensagem = 'Por favor, insira um número!';
      return;
    }

    if (this.palpite === this.numeroSecreto) {
      this.mensagem = 'Parabéns! Você acertou!';
      this.jogoFinalizado = true;
    } else {
      this.tentativasRestantes--;

      if (this.tentativasRestantes === 0) {
        this.mensagem = `Você perdeu! O número era ${this.numeroSecreto}.`;
        this.jogoFinalizado = true;
      } else {
        this.mensagem =
          this.palpite < this.numeroSecreto
            ? 'Muito baixo! Tente novamente.'
            : 'Muito alto! Tente novamente.';
      }
    }
  }

  reiniciarJogo() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.tentativasRestantes = 10;
    this.palpite = null;
    this.mensagem = '';
    this.jogoFinalizado = false;
  }
}
