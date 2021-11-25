import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  regiao : string = "";
  pokemons : any[] = [];

  constructor(private pkmServ : PokemonService, private rota: Router) { }

  ngOnInit() {
    this.loadingData();
  }

  mostrarPokemon(url : string) {
    this.pkmServ.buscarId(url).subscribe(id => {
      this.pkmServ.buscarPokemon(id).subscribe(pokemon => {
        this.pkmServ.setPokemon(pokemon);
        this.rota.navigateByUrl('/detalhes');
      });
    });
  }

  loadingData() {
    this.pkmServ.buscarPokemons().subscribe(dados => {
      if(dados.region !== null) {
        this.regiao = dados.region.name;
      }else {
        this.regiao = dados.names[2].name;
      }
      this.pokemons = dados.pokemon_entries;
    });
  }

}
