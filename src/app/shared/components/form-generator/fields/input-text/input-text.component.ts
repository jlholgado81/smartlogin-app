import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IField } from '../../../../../core/models/form.model';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  @Input() form: FormGroup;
  @Input() field: { name: string; configData: IField; required: boolean };
}
