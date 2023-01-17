import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    HomeComponent,
    PokemonComponent
  ],
})
export class PagesModule { }
