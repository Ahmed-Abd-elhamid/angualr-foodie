import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { ErrorComponentsModule } from './error-components/error-components.module';
import { FoodieBlogModule } from './foodie-blog/foodie-blog.module';
import { MainComponentsModule } from './main-components/main-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    ErrorComponentsModule,
    MainComponentsModule,
    FoodieBlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
