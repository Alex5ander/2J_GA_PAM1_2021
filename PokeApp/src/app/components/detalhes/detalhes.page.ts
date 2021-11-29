import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  pokemon = null;
  constructor(private pkmServ: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.pkmServ.pokemon;
    for(let t of this.pokemon.types) {
      this.mostrarDetalhesTipo(t.type.name);
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
