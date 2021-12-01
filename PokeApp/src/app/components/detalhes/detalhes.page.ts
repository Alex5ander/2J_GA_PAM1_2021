import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  pokemon = null;
  background = null;

  typeColors = {
    normal: "#bdbdb1",
    grass: "#8ad151",
    fire: "#fa5542",
    water: "#55aefe",
    fighting: "#a55647",
    flying: "#77a2fe",
    poison: "#a75a9e",
    ground: "#e8c75e",
    rock: "#cebc72",
    bug: "#c1d01d",
    ghost: "#7874d2",
    electric: "#f3e455",
    psychic: "#f966b6",
    ice: "#95f1ff",
    dragon: "#8272f9",
    dark: "#876353",
    steel: "#c4c2da",
    fairy: "#faadff",
  };

  constructor(private pkmServ: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.pkmServ.pokemon;
    let colors = [];
    for(let t of this.pokemon.types) {
      colors.push(this.typeColors[t.type.name]);
      this.mostrarDetalhesTipo(t.type.name);
    }

    if(colors.length == 2) {
      this.background = `linear-gradient(to right, ${colors[0]} 50%, ${colors[1]} 50%)`
    }else {
      this.background = `${colors[0]}`;
    }

  }

  mostrarDetalhesTipo(tipo: string) {
    this.pkmServ.buscarDetalhesTipo(tipo)
    .subscribe(detalhesTipo => {
      this.pokemon.types = this.pokemon.types.map(t => {
        if(t.type.name === tipo){
          t.damage_relations = detalhesTipo.damage_relations;
        }
        return t;
      });
    })
  }

}
