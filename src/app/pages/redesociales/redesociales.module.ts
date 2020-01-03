import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesocialesPageRoutingModule } from './redesociales-routing.module';

import { RedesocialesPage } from './redesociales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesocialesPageRoutingModule
  ],
  declarations: [RedesocialesPage]
})
export class RedesocialesPageModule {}
