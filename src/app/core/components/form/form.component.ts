import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IProperty } from '../../models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() formData = new EventEmitter();
  @Input() formSetupInfo: { requiredFields: string[]; fields: IProperty };

  get requiredFields(): string[] {
    return this.formSetupInfo.requiredFields;
  }

  get fields(): IProperty {
    return this.formSetupInfo.fields;
  }

  sendFormData(data: any): void {
    this.formData.emit(data);
  }
}
