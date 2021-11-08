import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = '';
  n1 = '';
  n2 = '';
  operador = '';

  constructor() {}

  insereNumero(digito: string) {
    if(this.operadorVazio()){
      if(this.n1 === "0") {
        this.n1 = digito;
      }else {
        this.n1 += digito;
      }
    }else if(!this.operadorVazio()){
      if(this.n2 === "0") {
        this.n2 = digito;
      }else {
        this.n2 += digito;
      }
    }

    this.display = this.n1+''+this.operador+''+this.n2;
  }
  insereZero() {
    if(!this.operadorVazio()){
      if(this.n2Vazio()){
        this.n2 = "0";
      }else if(Math.abs(Number(this.n2)) > 0){
        this.n2 += "0";
      }
    }else if(this.n1Vazio()){
      this.n1 = "0";
    }else if(Math.abs(Number(this.n1)) > 0){
      this.n1 += "0";
    }

    this.display = this.n1+''+this.operador+''+this.n2;
  }
  insereOperador(operador) {
    if(this.n1Vazio() && operador === "-"){
      this.n1 += operador;
    }else if(!this.n1Vazio() && this.n1 !== '-' && this.n2Vazio()) {
      this.operador = operador;
    }else if(!this.n2Vazio()) {
      this.calcular();
      this.operador = operador;
    }else if(!this.n1Vazio() && !this.n2Vazio()){
      this.n2 = this.n1;
      this.calcular();
      this.operador = operador;
    }

    this.display = this.n1+''+this.operador+''+this.n2;
  }
  insereUmPonto() {

    if(this.n1Vazio()) {
      this.n1 = "0.";
    }else if(!this.n1TemPonto() && this.operadorVazio()) {
      this.n1 += ".";
    }else if(!this.operadorVazio()) {
      if(this.n2Vazio()) {
        this.n2 = "0.";
      }else if(!this.n2TemPonto()) {
        this.n2 += ".";
      }
    }

    this.display = this.n1+''+this.operador+''+this.n2;
  }
  calcular() {
    if(this.n1 && this.n2 && this.operador){
      switch(this.operador) {
        case '+': this.display = this.somar(); break;
        case '-': this.display = this.subtrair(); break;
        case 'x': this.display = this.multiplicar(); break;
        case '/': this.display = this.dividir(); break;
      }

      this.n1 = this.display;
      this.n2 = '';
      this.operador = '';
    }
  }
  n1TemPonto() { return this.n1.search(/\./) !== -1}
  n2TemPonto() { return this.n2.search(/\./) !== -1}
  n1Vazio() { return this.n1 === "" }
  n2Vazio() { return this.n2 === "" }
  operadorVazio() { return this.operador === "" }
  somar() { return (parseFloat(this.n1) + parseFloat(this.n2)).toString() }
  subtrair() { return (parseFloat(this.n1) - parseFloat(this.n2)).toString() }
  multiplicar() { return (parseFloat(this.n1) * parseFloat(this.n2)).toString() }
  dividir() {
    if(Number(this.n2) === 0){
      alert("Erro!\nNão é possível dividir por 0");
      return '';
    }
    return (parseFloat(this.n1) / parseFloat(this.n2)).toString();
  }
  limpar() {
    this.n1 = '';
    this.n2 = '';
    this.operador = '';
    this.display = '';
  }
}
