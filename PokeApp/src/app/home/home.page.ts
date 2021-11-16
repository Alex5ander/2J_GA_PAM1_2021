import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  regioes: any[] = [];

  constructor(private pkmServ: PokemonService, private rota : Router) {

  }

  mostrarDetalhes(url: string) {
    console.log(1)
    this.pkmServ.setUrl(url);
    this.rota.navigateByUrl("/detalhes");
  }

  ngOnInit() {
    this.pkmServ.buscarRegioes()
    .subscribe(e => {
      this.regioes = e.results;
    })
  }

}
