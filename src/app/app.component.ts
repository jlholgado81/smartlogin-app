import { Component, OnInit } from '@angular/core';

import { IForm } from './core/models/form.model';

import { FormService } from './core/services/form.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: IForm;

  constructor(private readonly _formService: FormService) {}

  public ngOnInit(): void {
    this._formService.getForm().subscribe((data: IForm) => {
      this.data = data;
    });
  }
}
