import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponentsRoutingModule } from './main-components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { FoodieBlogRoutingModule } from '../foodie-blog/foodie-blog-routing.module';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainComponentsRoutingModule,
    FoodieBlogRoutingModule,
    MaterialModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainComponentsModule { }
