
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { data } from 'src/app/data.module';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  almacen:data[]=[]
  mostrar=false;

  buscar(id:string){
    this.route.navigate(['/pokemon', id])
  }
  constructor(private baseD:PokedexService, private route:Router, router:ActivatedRoute) { }
  ordenar(){
    this.mostrar=!this.mostrar
    this.almacen=this.almacen.sort((a:data,b:data)=>(a.id>b.id)? 1:-1)
  }

  ngOnInit(): void {

    for (let i=1; i<=150; i++){
      this.baseD.BD(String(i)).subscribe(x=>{
        try{
          this.almacen.push(new data(x.nombre, x.id, x.sprites.front_default, x.types[0].type.name, x.type[1].type.name))
        }catch{
          this.almacen.push(new data(x.nombre, x.id, x.sprites.front_default, x.types[0].type.name, ''))
        }
      })
    }
  }


}
