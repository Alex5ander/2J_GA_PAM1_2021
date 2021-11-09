import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = "https://pokeapi.co/api/v2";

  constructor (private http: HttpClient) {

  }

  buscarRegioes () : Observable<any>{
    return this.http.get<any>(this.baseURL+'/location/?lang=pt').pipe(
      map(regioes => regioes),
      catchError(error => error));
  }
}
