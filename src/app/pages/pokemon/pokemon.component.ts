import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  id!:string | null;
  pokeDetail:any=[];

  regresar(){
    this.router.navigate(['/'])
  }
  constructor(private baseD:PokedexService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let pokemon;
    this.id=this.route.snapshot.paramMap.get('id')

    if(this.id!=null){
      this.baseD.BD(this.id).subscribe(x=>this.pokeDetail.push(x))
    }
  }
  
}
