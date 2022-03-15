import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonList } from 'src/app/models/PokemonList';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    var pokemonList: PokemonList = this.route.snapshot.data['pokemons'];
    pokemonList.results.forEach((element) => {
      this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${element.name}`).subscribe((poke) => this.pokemons.push(poke));
    })
  }

}
