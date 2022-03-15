import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { PokemonList } from 'src/app/models/PokemonList';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<PokemonList> {
  constructor(private pokeService: PokeapiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonList> {
    return this.pokeService.get<PokemonList>('pokemon?limit=30&offset=0');    
  }
}
