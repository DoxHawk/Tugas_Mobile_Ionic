import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesViewPage } from './tes-view.page';

const routes: Routes = [
  {
    path: '',
    component: TesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesViewPageRoutingModule {}
