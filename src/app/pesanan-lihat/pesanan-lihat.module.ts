import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananLihatPageRoutingModule } from './pesanan-lihat-routing.module';

import { PesananLihatPage } from './pesanan-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananLihatPageRoutingModule
  ],
  declarations: [PesananLihatPage]
})
export class PesananLihatPageModule {}
