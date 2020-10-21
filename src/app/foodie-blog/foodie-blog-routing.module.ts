import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReactiveComponent } from './create-reactive/create-reactive.component';
import { CreateTemplateComponent } from './create-template/create-template.component';

const routes: Routes = [
  {
    path: 'create/template',
    component: CreateTemplateComponent
  },
  {
    path: 'create/reactive',
    component: CreateReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodieBlogRoutingModule { }
