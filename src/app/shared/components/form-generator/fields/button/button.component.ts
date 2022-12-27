import { Component, Input } from '@angular/core';

import { IField } from '../../../../../core/models/form.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() field: { name: string; configData: IField; required: boolean };
}
