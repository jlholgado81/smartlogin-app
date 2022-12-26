export interface IForm {
  title: string;
  description: string;
  required: string[];
  properties: IProperty;
}

export interface IProperty {
  email: IField;
  firstName: IField;
  lastName: IField;
  telephone: IField;
  about: IField;
}

export interface IField {
  type: string;
  format: null | string;
  title: string;
  pattern: null | string;
  value: null;
  error: null;
  default?: null | string;
}
