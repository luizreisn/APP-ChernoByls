import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosPage } from './produtos.page';

const routes: Routes = [
  {
    path: ':produtoid/:id',
    component: ProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosPageRoutingModule {}
