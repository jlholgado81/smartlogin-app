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

  mockPostForm200 = {
    title: 'Welcome to our website!',
    description:
      'Congratulations! Your user account has been created successful.',
    required: [],
    properties: {
      button1: {
        type: 'button',
        format: null,
        title: 'Redirect to HOME',
        pattern: null,
        value: 'https://example.com',
        error: null,
      },
    },
  };

  mockPostForm400 = {
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
        value: 'example@example.com',
        error: 'Email already in use',
      },
      firstName: {
        type: 'string',
        format: null,
        title: 'First name',
        default: 'John',
        pattern: '^\\w{3,}$',
        value: 'Javier',
        error: null,
      },
      lastName: {
        type: 'string',
        format: null,
        title: 'Last name',
        default: 'Doe',
        pattern: '^\\w{3,}$',
        value: 'Guarcía',
        error: null,
      },
      telephone: {
        type: 'string',
        format: 'tel',
        title: 'Telephone',
        pattern: '^\\d{6,}$',
        value: '666123456',
        error: null,
      },
      about: {
        type: 'string',
        format: 'textarea',
        title: 'About yourself',
        pattern: '^\\w{3,}$',
        value:
          'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero.',
        error: null,
      },
    },
  };

  constructor() {}

  public getForm(): Observable<IForm> {
    return of(this.mockForm);
  }

  public postForm(formData: IForm): Observable<IForm> {
    // llamada http post al back
    // this.http.post(...);

    // para simular una respuesta http 200
    // return of(this.mockPostForm200);

    // para simular una respuesta http 400
    return of(this.mockPostForm400);
  }
}
