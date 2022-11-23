import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLihatPage } from './menu-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: MenuLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuLihatPageRoutingModule {}
