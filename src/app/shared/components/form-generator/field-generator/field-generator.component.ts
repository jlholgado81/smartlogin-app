import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IField } from '../../../../core/models/form.model';

@Component({
  selector: 'app-field-generator',
  templateUrl: './field-generator.component.html',
  styleUrls: ['./field-generator.component.css'],
})
export class FieldGeneratorComponent {
  @Input() form: FormGroup;
  @Input() field: { name: string; configData: IField; required: boolean };
}
