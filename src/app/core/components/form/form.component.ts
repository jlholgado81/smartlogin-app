import { Component, OnInit, Input } from '@angular/core';

import { IForm } from '../../models/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() formSetupInfo: IForm;

  constructor() { }

  ngOnInit() {
    
  }

}