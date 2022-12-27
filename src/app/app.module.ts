import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGeneratorModule } from './shared/components/form-generator/form-generator.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormComponent } from './core/components/form/form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormGeneratorModule],
  declarations: [AppComponent, HeaderComponent, FormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
