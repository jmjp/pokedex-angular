import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthcheckGuard } from './guards/authcheck.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonListResolver } from './pages/pokemon-list/pokemon-list.resolver';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthcheckGuard]
  },
  {
    path: '**',
    component: PokemonListComponent,
    resolve: { pokemons: PokemonListResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
