import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponentsRoutingModule } from './main-components-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainComponentsRoutingModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainComponentsModule { }
