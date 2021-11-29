import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  regioes: any[] = [];

  constructor(private pkmServ: PokemonService, private rota : Router, private loadingController : LoadingController) { }

  async mostrarPokemons(url: string) {
    this.pkmServ.setUrl(url);
    this.rota.navigateByUrl("/pokemons");
  }

  async ngOnInit() {
    const loader = await this.loadingController.create({
      message: "Carregando regiões...",
    });
    loader.present();
    this.pkmServ.buscarRegioes()
    .subscribe(({ results }) => {
      this.regioes = results;
      loader.dismiss();
    })
  }

}
