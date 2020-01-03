import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicasPageRoutingModule } from './chicas-routing.module';

import { ChicasPage } from './chicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChicasPageRoutingModule
  ],
  declarations: [ChicasPage]
})
export class ChicasPageModule {}
