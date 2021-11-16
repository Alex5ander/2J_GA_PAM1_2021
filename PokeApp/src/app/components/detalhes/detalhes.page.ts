import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  pokemons: any[] = [];
  regiao: string = "";
  constructor(private pkmServ: PokemonService) { }

  ngOnInit() {
    this.loadingData();
  }

  loadingData() {
    this.pkmServ.buscarPokemons().subscribe(dados => {
      console.log(dados);
      if(dados.region !== null) {
        this.regiao = dados.region.name;
      }else {
        this.regiao = dados.names[2].name;
      }
      this.pokemons = dados.pokemon_entries;
    });
  }
}
