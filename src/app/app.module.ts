import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { JogoAdivinhacaoComponent } from './jogo-adivinhacao/jogo-adivinhacao.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListaTarefasComponent, ConversorTemperaturaComponent, CronometroComponent, JogoAdivinhacaoComponent],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
