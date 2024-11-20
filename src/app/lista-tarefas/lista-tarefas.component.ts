import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent {
  novaTarefa: string = '';
  tarefas: { descricao: string; concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ descricao: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(tarefa: any) {
    this.tarefas = this.tarefas.filter(t => t !== tarefa);
  }

  alternarTarefa(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
