import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

import { IProperty, IField } from '../../../core/models/form.model';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnChanges {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: IProperty;
  @Input() requiredFields: string[];
  form: FormGroup;
  fieldsData: Array<{ name: string; configData: IField; required: boolean }> =
    [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fields && changes.fields.currentValue) {
      let fieldsControls = {};

      this.fieldsData = [];
      for (let fieldStr of Object.keys(this.fields)) {
        // if (field.type != 'checkbox') {
        //   fieldsControls[field.name] = new FormControl(f.value || '', Validators.required)
        // } else {
        //   let opts = {};
        //   for (let opt of field.options) {
        //     opts[opt.key] = new FormControl(opt.value);
        //   }
        //   fieldsControls[field.name] = new FormGroup(opts)
        // }
        const field: IField = this.fields[fieldStr];
        const fieldData: {
          name: string;
          configData: IField;
          required: boolean;
        } = {
          name: fieldStr,
          configData: field,
          required: this.requiredFields.indexOf(fieldStr) !== -1,
        };
        this.fieldsData.push(fieldData);
        const validators: ValidatorFn[] = [];

        if (fieldData.required) {
          validators.push(Validators.required);
        }

        if (fieldData.configData.pattern) {
          validators.push(Validators.pattern(fieldData.configData.pattern));
        }

        fieldsControls[fieldStr] = new FormControl(field.default, validators);
      }

      this.form = new FormGroup(fieldsControls);
    }
  }
}
