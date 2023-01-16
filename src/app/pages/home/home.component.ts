
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data: any[] = [];
  //datasource = new
  pokemons = [];

  constructor(private pokedex: PokedexService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {

    let pokemonData;

    for (let i = 1; i < 150; i++) {

      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {

        }
      )

    }

  }


}
