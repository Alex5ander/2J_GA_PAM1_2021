import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina = null;
  etanol = null;
  images = ["", ""];
  title = "";
  constructor() {}

  verificar(): void{
   if(this.gasolina != null && this.etanol != null){
    let g = this.etanol + (this.etanol * .3);
    this.title = "";
    this.images = ["", ""];
    if(g > this.gasolina){
      this.title = "Gasolina";
      this.images[0] = "gasolina.png";
    }else if(g < this.gasolina){
      this.title = "Etanol";
      this.images[1] = "etanol.png";
    }else{
      this.title = "Gasolina e Etanol";
      this.images = ["gasolina.png", "etanol.png"];
    }
   }
  }
}
