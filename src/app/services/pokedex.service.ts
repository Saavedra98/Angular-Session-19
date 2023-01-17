import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  constructor(private http:HttpClient) { }
  
  urlBase='https://pokeapi.co/api/v2/pokemon/'
  BD(id:string){
    return this.http.get<any>(this.urlBase+id)
  }

}
