import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = '';
  n1 = null;
  n2 = null;
  operador = null;

  constructor() {}

  insereUmDigito(digito) {
    let ultimoDigito = this.valor[this.valor.length -1];
    if(!isNaN(digito)){
      if(!this.operador){
          this.n1 += digito;
          this.valor += digito;
      }else {
        this.n2 += digito;
        this.valor += digito;
      }
    }else{
      if(isNaN(ultimoDigito)){
        this.operador = digito;
        this.valor += digito;
      }
    }
  }
  calcular() {
    if(this.n1 && this.n2 && this.operador){
      if(this.operador === "+"){
        this.valor = (parseFloat(this.n1) + parseFloat(this.n2)).toString();
      }else if(this.operador === "-"){
        this.valor = (parseFloat(this.n1) - parseFloat(this.n2)).toString();
      }else if(this.operador === "*"){
        this.valor = (parseFloat(this.n1) * parseFloat(this.n2)).toString();
      }else if(this.operador === "/"){
        this.valor = (parseFloat(this.n1) / parseFloat(this.n2)).toString();
      }
    }
  }
  limpar() {
    this.n1 = null;
    this.n2 = null;
    this.operador = null;
    this.valor = "";
  }
}
