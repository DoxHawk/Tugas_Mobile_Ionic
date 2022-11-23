import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'tes-view',
    loadChildren: () => import('./tes-view/tes-view.module').then( m => m.TesViewPageModule)
  },
  {
    path: 'menu-lihat',
    loadChildren: () => import('./menu-lihat/menu-lihat.module').then( m => m.MenuLihatPageModule)
  },
  {
    path: 'menu-tambah',
    loadChildren: () => import('./menu-tambah/menu-tambah.module').then( m => m.MenuTambahPageModule)
  },
  {
    path: 'menu-edit/:menu_id',
    loadChildren: () => import('./menu-edit/menu-edit.module').then( m => m.MenuEditPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
