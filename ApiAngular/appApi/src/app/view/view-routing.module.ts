import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPage } from './view.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPage
  },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'filmes-detalhes',
    loadChildren: () => import('./filmes-detalhes/filmes-detalhes.module').then( m => m.FilmesDetalhesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPageRoutingModule {}
