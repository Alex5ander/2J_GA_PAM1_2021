import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina = null;
  etanol = null;
  images = [null, null];
  title = null;
  constructor() {}

  verificar(): void{
   if(this.gasolina != null && this.etanol != null){
    let diff = this.gasolina - this.etanol;
    this.title = null
    this.images = [null, null];
    if(diff < this.gasolina * .3){
      this.title = "Gasolina";
      this.images[0] = "gasolina.png";
    }else if(diff > this.gasolina * .3){
      this.title = "Etanol";
      this.images[1] = "etanol.png";
    }else{
      this.title = "Gasolina e Etanol";
      this.images = ["gasolina.png", "etanol.png"];
    }
   }
  }
}
