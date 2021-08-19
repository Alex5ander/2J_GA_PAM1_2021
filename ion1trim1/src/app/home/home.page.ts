import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = null;
  num2 = null;
  resposta = '';
  
  constructor() {}

  temnumero(): boolean {
    return this.num1 !== null && this.num2 !== null;
  }

  somar(): void {
    if(this.temnumero()){
      this.resposta = String(this.num1 + this.num2);
    }
  }

  subtrair(): void {
    if(this.temnumero()){
      this.resposta = String(this.num1 - this.num2);
    }
  }

  multiplicar(): void {
    if(this.temnumero()){
      this.resposta = String(this.num1 * this.num2);
    }
  }

  dividir(): void {
    if(this.temnumero()){
      if(this.num2 === 0){
        this.resposta = "Não pode ser dividido por zero";
      }else {
        this.resposta = String(this.num1 / this.num2);
      }
    }
  }
}
