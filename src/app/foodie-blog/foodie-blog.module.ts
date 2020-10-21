import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodieBlogRoutingModule } from './foodie-blog-routing.module';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { CreateReactiveComponent } from './create-reactive/create-reactive.component';
import { ShowComponent } from './show/show.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';
import { UpdateReactiveComponent } from './update-reactive/update-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [CreateTemplateComponent, CreateReactiveComponent, ShowComponent, UpdateTemplateComponent, UpdateReactiveComponent],
  imports: [
    CommonModule,
    FoodieBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FoodieBlogModule { }
