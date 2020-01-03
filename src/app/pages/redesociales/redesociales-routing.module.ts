import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesocialesPage } from './redesociales.page';

const routes: Routes = [
  {
    path: '',
    component: RedesocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesocialesPageRoutingModule {}
