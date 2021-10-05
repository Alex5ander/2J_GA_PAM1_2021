import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome = '';
  anoNasc = null;
  mensagem1 = '';
  mensagem2 = '';
  constructor() {}

  verificar() {
    const idade = 2021 - this.anoNasc;
    this.mensagem1 = this.nome + ' você tem '+ idade + ' anos.';
    if(idade < 18) {
      this.mensagem2 = "Você é menor de idade";
    }
  }

  limpar() {
    this.nome = '';
    this.anoNasc = null;
    this.mensagem1 = '';
    this.mensagem2 = '';
  }
}
