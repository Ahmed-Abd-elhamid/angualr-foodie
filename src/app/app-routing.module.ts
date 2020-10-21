import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponentsRoutingModule } from './error-components/error-components-routing.module';
import { FoodieBlogRoutingModule } from './foodie-blog/foodie-blog-routing.module';
import { MainComponentsRoutingModule } from './main-components/main-components-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainComponentsRoutingModule,
    FoodieBlogRoutingModule,
    ErrorComponentsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
