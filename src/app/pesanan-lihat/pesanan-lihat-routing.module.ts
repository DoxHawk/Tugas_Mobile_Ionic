import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananLihatPage } from './pesanan-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: PesananLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananLihatPageRoutingModule {}
