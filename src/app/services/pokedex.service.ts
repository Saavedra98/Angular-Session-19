import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  urlBase="https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) { 
    console.log('Pokedex')
  }

  getPokemon(index: string){
    return this.http.get<any>(`${this.urlBase}/pokemon/${index}`);
    
  }

}
