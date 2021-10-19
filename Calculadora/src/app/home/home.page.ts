import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = '';
  n1 = '';
  n2 = '';
  operador = '';

  constructor() {}

  insereUmDigito(digito) {
    let ultimoDigito = this.valor[this.valor.length -1];
    if(digito === '.'){
      if(this.n1 === '') {
        this.n1 = '0.'
      }else if(this.n1.search(/\./) === -1) {
        this.n1 += '.'
      }
      if(this.operador) {
        if(this.n2 === '') {
          this.n2 = '0.'
        }else if(this.n2.search(/\./) === -1) {
          this.n2 += '.'
        }
      }
    }else if(this.eNumero(digito)){
      if(!this.operador){
          this.n1 += digito;
      }else {
        this.n2 += digito;
      }
    }else if(this.eNumero(ultimoDigito)){
      if(!this.operador){
        this.operador = digito;
      }else {
        this.calcular();
        this.operador = digito;
      }
    }
    this.valor = this.n1+''+this.operador+''+this.n2;
  }
  eNumero(digito) {
    return !isNaN(digito);
  }
  eOperador(digito) {return digito === "+" || digito === '-' || digito === 'x' || digito === '/'}
  calcular() {
    if(this.n1 && this.n2 && this.operador){
      if(this.operador === '+'){
        this.valor = (parseFloat(this.n1) + parseFloat(this.n2)).toString();
      }else if(this.operador === '-'){
        this.valor = (parseFloat(this.n1) - parseFloat(this.n2)).toString();
      }else if(this.operador === 'x'){
        this.valor = (parseFloat(this.n1) * parseFloat(this.n2)).toString();
      }else if(this.operador === '/'){
        this.valor = (parseFloat(this.n1) / parseFloat(this.n2)).toString();
      }

      this.n1 = this.valor;
      this.n2 = '';
      this.operador = '';
    }
  }
  limpar() {
    this.n1 = '';
    this.n2 = '';
    this.operador = '';
    this.valor = '';
  }
}
