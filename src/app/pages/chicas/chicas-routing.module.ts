import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicasPage } from './chicas.page';

const routes: Routes = [
  {
    path: '',
    component: ChicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChicasPageRoutingModule {}
