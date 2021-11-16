import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalhesPage } from './components/detalhes/detalhes.page';
import { PokemonsPage } from './components/pokemons/pokemons.page';

const routes: Routes = [
  {path: 'detalhes', component: DetalhesPage},
  {path: 'pokemon', component: PokemonsPage},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./components/pokemons/pokemons.module').then( m => m.PokemonsPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./components/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
