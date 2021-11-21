import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string;
  baseURL = "https://pokeapi.co/api/v2";
  pokemon = null;

  constructor (private http: HttpClient) {

  }

  setUrl(url: string) {
    this.url = url;
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  buscarRegioes () : Observable<any>{
    return this.http.get<any>(this.baseURL+'/pokedex?lang=pt')
    .pipe(map(regioes => regioes),
    catchError(error => error));
  }

  buscarPokemons () : Observable<any>{
    return this.http.get<any>(this.url)
    .pipe(map(pokemons => pokemons),
    catchError(error => error));
  }

  buscarPokemon(nome : string) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/pokemon/' + nome + '?lang=pt')
    .pipe(map(pokemon => pokemon),
    catchError(error => error));
  }

  buscarDetalhesTipo(tipo: string) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/type/' + tipo + '?lang=pt')
    .pipe(map(detalhesTipo => detalhesTipo),
    catchError(error => error));
  }
}
