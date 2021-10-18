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
  operador = null;

  constructor() {}

  insereUmDigito(digito) {
    let ultimoDigito = this.valor[this.valor.length -1];
    if(this.eNumero(digito)){
      if(!this.operador){
          this.n1 += digito;
          this.valor += digito;
      }else {
        this.n2 += digito;
        this.valor += digito;
      }
    }else{
      if(this.eNumero(ultimoDigito) && !this.operador){
        this.operador = digito;
        this.valor += digito;
      }
    }
  }
  eNumero(digito) {
    return !isNaN(digito);
  }
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
