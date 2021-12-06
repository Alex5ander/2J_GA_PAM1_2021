import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = '0';
  n1 = '';
  n2 = '';
  operador = '';
  temponto = false;
  ultimaoperacao = '';
  ultimonumero = '';

  constructor() {}

  insereNumero(digito: string) {
    if(this.operadorVazio()){
      if(digito === '0' && this.temponto) {
        this.n1 += '0';
      }else {
        this.n1 += digito;
        this.n1 = parseFloat(this.n1).toString();
      }
    }else if(!this.operadorVazio()){
      if(digito === '0' && this.temponto) {
        this.n2 += '0';
      }else {
        this.n2 += digito;
        this.n2 = parseFloat(this.n2).toString();
      }
    }

    this.display = this.n1+''+this.operador+''+this.n2;
  }

  insereOperador(operador) {
   
    if(operador !== '=') {
      
      if(!this.n1Vazio() && !this.operadorVazio() && this.n2Vazio() && operador == '-') {
        this.n2 = "-";
        this.display = this.n1+''+this.operador+''+this.n2;
      }else if(!this.n1Vazio() && this.n2Vazio()) {
        this.operador = operador;
        this.display = this.n1+''+this.operador+''+this.n2;
      }
      else if(!this.n1Vazio() && !this.operadorVazio() && !this.n2Vazio()) {
        this.calcular();
        this.operador = operador;
        this.display = this.n1+''+this.operador+''+this.n2;
      }else if(operador == "-" && this.n1Vazio()) {
        this.n1 = "-";
        this.display = this.n1+''+this.operador+''+this.n2;
      }
     
    }

    this.temponto = false;
  }
  insereUmPonto() {
    if(!this.temponto) {
      if(this.n1Vazio()) {
        this.temponto = true;
        this.n1 = "0.";
      }else if(this.operador && this.n2Vazio()) {
        this.temponto = true;
        this.n2 = "0.";
      }else if(!this.n1Vazio() && this.operadorVazio()) {
        this.temponto = true;
        this.n1 += ".";
      }else if(!this.n2Vazio()) {
        this.temponto = true;
        this.n2 += ".";
      }
    }
  
    this.display = this.n1+''+this.operador+''+this.n2;
  }
  calcular() {
    if(this.ultimaoperacao && this.ultimonumero && this.operador == '') {
      this.n2 = this.ultimonumero;

      switch(this.ultimaoperacao) {
        case '+': this.display = this.somar(); break;
        case '-': this.display = this.subtrair(); break;
        case 'x': this.display = this.multiplicar(); break;
        case '/': this.display = this.dividir(); break;
      }
      
      this.n1 = this.display;
      this.n2 = '';
      this.operador = '';
    }else if(this.n1 && this.n2 && this.operador){
    
      if(this.operador == '/' && this.n2 == '0') {
        this.display = "Erro";
        setTimeout(() => {
          this.limpar();
        }, 500);
        return;
      } 

      let resultado = '0';

      switch(this.operador) {
        case '+': resultado = this.somar(); break;
        case '-': resultado = this.subtrair(); break;
        case 'x': resultado = this.multiplicar(); break;
        case '/': resultado = this.dividir(); break;
      }

      if(isNaN(parseFloat(resultado))) {
        return;
      }

      this.display = resultado;

      this.ultimaoperacao = this.operador;
      this.ultimonumero = this.n2;
      
      this.n1 = this.display;
      this.n2 = '';
      this.operador = '';
    }

    if(this.display.includes('.')) {
      this.temponto = true;
    }else {
      this.temponto = false;
    }
  }
  n1Vazio() { return this.n1 === '' }
  n2Vazio() { return this.n2 === '' }
  operadorVazio() { return this.operador === '' }
  somar() { return (parseFloat(this.n1) + parseFloat(this.n2)).toString() }
  subtrair() { return (parseFloat(this.n1) - parseFloat(this.n2)).toString() }
  multiplicar() { return (parseFloat(this.n1) * parseFloat(this.n2)).toString() }
  dividir() { return (parseFloat(this.n1) / parseFloat(this.n2)).toString() }
  limpar() {
    this.n1 = '';
    this.n2 = '';
    this.temponto = false;
    this.ultimaoperacao = '';
    this.ultimonumero = '';
    this.operador = '';
    this.display = '0';
  }
}
