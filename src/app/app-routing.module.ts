import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdmnGuard } from './guards/admn.guard';

const routes: Routes = [
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
<<<<<<< HEAD
    canLoad: [AdmnGuard]
  },
  {
    path: 'menu-lihat',
    loadChildren: () => import('./menu-lihat/menu-lihat.module').then( m => m.MenuLihatPageModule),
=======
>>>>>>> b579064e0c4b8b592a41cdfe4d2266171a646e95
    canLoad: [AuthGuard]
  },
  {
    path: 'menu-tambah',
    loadChildren: () => import('./menu-tambah/menu-tambah.module').then( m => m.MenuTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'menu-edit/:menu_id',
    loadChildren: () => import('./menu-edit/menu-edit.module').then( m => m.MenuEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pesanan',
    loadChildren: () => import('./pesanan/pesanan.module').then( m => m.PesananPageModule),
    canLoad: [AuthGuard]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
