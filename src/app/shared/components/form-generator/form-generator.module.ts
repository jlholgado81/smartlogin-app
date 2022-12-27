import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './fields/input-text/input-text.component';
import { ButtonComponent } from './fields/button/button.component';
// import { InputCheckComponent } from './fields/input-check/input-check.component';
import { FieldGeneratorComponent } from './field-generator/field-generator.component';
import { FormGeneratorComponent } from './form-generator.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    InputTextComponent,
    ButtonComponent,
    // InputCheckComponent,
    FieldGeneratorComponent,
    FormGeneratorComponent,
  ],
  exports: [FormGeneratorComponent],
})
export class FormGeneratorModule {}
