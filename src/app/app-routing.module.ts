import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { JogoAdivinhacaoComponent } from './jogo-adivinhacao/jogo-adivinhacao.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-tarefas', pathMatch: 'full' },
  { path: 'lista-tarefas', component: ListaTarefasComponent },
  { path: 'jogo-adivinhacao', component: JogoAdivinhacaoComponent },
  { path: 'cronometro', component: CronometroComponent },
  { path: 'conversor-temperatura', component: ConversorTemperaturaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
