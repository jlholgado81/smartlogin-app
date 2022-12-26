import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IField } from '../../../../core/models/form.model';

@Component({
  selector: 'app-field-generator',
  templateUrl: './field-generator.component.html',
  styleUrls: ['./field-generator.component.css'],
})
export class FieldGeneratorComponent implements OnInit {
  @Input() field: IField;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
