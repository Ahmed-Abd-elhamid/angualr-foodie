import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponentsRoutingModule } from './error-components-routing.module';
import { Err401Component } from './err401/err401.component';
import { Err403Component } from './err403/err403.component';
import { Err404Component } from './err404/err404.component';
import { Err500Component } from './err500/err500.component';


@NgModule({
  declarations: [Err401Component, Err403Component, Err404Component, Err500Component],
  imports: [
    CommonModule,
    ErrorComponentsRoutingModule
  ]
})
export class ErrorComponentsModule { }
