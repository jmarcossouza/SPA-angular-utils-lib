import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularUtilsModule } from 'angular-utils';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularUtilsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
