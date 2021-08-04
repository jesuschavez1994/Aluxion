import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home', loadChildren: ()=>import('@pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'detail/:id', loadChildren: ()=>import('@pages/stop/stop-detail.module').then(m=>m.stopDetaillModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
