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

  insereUmDigito(digito: string) {
    if(this.eNumero(digito)){
      if(!this.operador){
        this.n1 += digito;
      }else {
        this.n2 += digito;
      }
    }else if(this.eOperador(digito)) {
      if(this.n1 !== "" && this.n2 === "") {
        this.operador = digito;
      }else if(this.n2 !== "") {
        this.calcular();
        this.operador = digito;
      }
    }else if(digito === ".") {
      if(this.n1 === "") {
        this.n1 = "0.";
      }else if(this.operador === "" && this.n1.search(/\./) == -1){
       this.n1 += digito;
      }else if(this.operador !== "") {
        if(this.n2 === ""){
          this.n2 = "0.";
        }else if(this.n2.search(/\./) == -1){
          this.n2 += digito;
        }
      }
    }

    this.valor = this.n1+''+this.operador+''+this.n2;
  }
  calcular() {
    if(parseFloat(this.n2) === 0) {
      alert("Erro!\nNão é possível dividir por 0");
    }else if(this.n1 && this.n2 && this.operador){
      if(this.operador === '+'){
        this.valor = this.somar();
      }else if(this.operador === '-'){
        this.valor = this.subtrair();
      }else if(this.operador === 'x'){
        this.valor = this.multiplicar();
      }else if(this.operador === '/'){
        this.valor = this.dividir();
      }

      this.n1 = this.valor;
      this.n2 = '';
      this.operador = '';
    }
  }
  eNumero(digito) { return !isNaN(digito); }
  eOperador(digito) { return digito === "+" || digito === '-' || digito === 'x' || digito === '/'; }
  somar() { return (parseFloat(this.n1) + parseFloat(this.n2)).toString() }
  subtrair() { return (parseFloat(this.n1) - parseFloat(this.n2)).toString() }
  multiplicar() { return (parseFloat(this.n1) * parseFloat(this.n2)).toString() }
  dividir() { return (parseFloat(this.n1) / parseFloat(this.n2)).toString() }
  limpar() {
    this.n1 = '';
    this.n2 = '';
    this.operador = '';
    this.valor = '';
  }
}
