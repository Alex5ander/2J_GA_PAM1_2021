import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.services.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  pokemon = null;
  tipos = [];
  constructor(private pkmServ: PokemonService) { }

  ngOnInit() {
    this.loadingData();
  }

  mostrarDetalhesTipo(tipo: string) {
    this.pkmServ.buscarDetalhesTipo(tipo)
    .subscribe(detalhesTipo => {
      this.tipos.push(detalhesTipo);
    })
  }

  loadingData() {
    this.pokemon = this.pkmServ.pokemon;
    
    for(let t of this.pokemon.types) {
      this.mostrarDetalhesTipo(t.type.name);
    }
    
  }
}
