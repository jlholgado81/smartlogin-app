import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProperty, IField } from '../../../core/models/form.model';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: IProperty;
  @Input() requiredFields: string[];
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    let fieldsControls = {};

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

      if (this.requiredFields[fieldStr]) {
        fieldsControls[fieldStr] = new FormControl(
          field.default,
          Validators.required
        );
      } else {
        fieldsControls[fieldStr] = new FormControl(field.default);
      }
    }

    this.form = new FormGroup(fieldsControls);
  }
}
