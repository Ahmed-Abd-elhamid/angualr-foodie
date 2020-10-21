import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err401Component } from './err401/err401.component';
import { Err403Component } from './err403/err403.component';
import { Err404Component } from './err404/err404.component';
import { Err500Component } from './err500/err500.component';

const routes: Routes = [
  {
    path: '401',
    component: Err401Component
  },
  {
    path: '403',
    component: Err403Component
  },
  {
    path: '404',
    component: Err404Component
  },
  {
    path: '500',
    component: Err500Component
  },
  {
    path: '**',
    component: Err404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorComponentsRoutingModule { }
