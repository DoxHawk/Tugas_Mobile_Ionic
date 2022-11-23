import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuLihatPageRoutingModule } from './menu-lihat-routing.module';

import { MenuLihatPage } from './menu-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuLihatPageRoutingModule
  ],
  declarations: [MenuLihatPage]
})
export class MenuLihatPageModule {}
