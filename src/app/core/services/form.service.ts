import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IForm } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  mockForm = {
    title: 'Welcome to our website!',
    description: 'Please, fill this form in order to register in our website.',
    required: ['email', 'telephone'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
        title: 'Email',
        default: null,
        pattern: null,
        value: null,
        error: null,
      },
      firstName: {
        type: 'string',
        format: null,
        title: 'First name',
        default: 'John',
        pattern: '^\\w{3,}$',
        value: null,
        error: null,
      },
      lastName: {
        type: 'string',
        format: null,
        title: 'Last name',
        default: 'Doe',
        pattern: '^\\w{3,}$',
        value: null,
        error: null,
      },
      telephone: {
        type: 'string',
        format: 'tel',
        title: 'Telephone',
        pattern: '^\\d{6,}$',
        value: null,
        error: null,
      },
      about: {
        type: 'string',
        format: 'textarea',
        title: 'About yourself',
        pattern: '^\\w{3,}$',
        value: null,
        error: null,
      },
    },
  };

  constructor() {}

  public getForm(): Observable<IForm> {
    return of(this.mockForm);
  }
}