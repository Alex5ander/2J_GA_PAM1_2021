import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  regiao : string = "";
  pokemons : any[] = [];

  constructor(private pkmServ : PokemonService, private rota: Router, private loadingController : LoadingController) { }

  async loading(message: string) {
    const loader = await this.loadingController.create({ message });
    loader.present();
    return loader;
  }

  async ngOnInit() {
    const loader = await this.loading("Carregando Pokemons...");
    this.pkmServ.buscarPokemons().subscribe(dados => {
      if(dados.region !== null) {
        this.regiao = dados.region.name;
      }else {
        this.regiao = dados.names[2].name;
      }
      this.pokemons = dados.pokemon_entries;
      loader.dismiss();
    });
  }

  async mostrarPokemon(url : string) {
    const loader = await this.loading("Carregando Pokemon...");
    this.pkmServ.buscarId(url).subscribe(id => {
      this.pkmServ.buscarPokemon(id).subscribe(pokemon => {
        this.pkmServ.setPokemon(pokemon);
        loader.dismiss();
        this.rota.navigateByUrl('/detalhes');
      });
    });
  }
  
}
