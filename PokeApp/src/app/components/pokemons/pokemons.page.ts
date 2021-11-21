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

  mostrarPokemon(nome : string) {
    this.pkmServ.buscarPokemon(nome).subscribe(dados => {
      this.pkmServ.setPokemon(dados);
      this.rota.navigateByUrl('/detalhes');
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
