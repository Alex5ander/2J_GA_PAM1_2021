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

  constructor (private http: HttpClient) {

  }

  setUrl(url: string) {
    this.url = url;
  }

  buscarRegioes () : Observable<any>{
    return this.http.get<any>(this.baseURL+'/pokedex/?lang=pt')
    .pipe(map(regioes => regioes),
    catchError(error => error));
  }

  buscarPokemons () : Observable<any>{
    return this.http.get<any>(this.url)
    .pipe(map(pokemons => pokemons),
    catchError(error => error));
  }
}
