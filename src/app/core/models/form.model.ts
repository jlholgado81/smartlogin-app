export interface IForm {
  title: string;
  description: string;
  required: string[];
  properties: IProperty;
}

export interface IProperty {
  [key: string]: IField;
}

export interface IField {
  type: string;
  format: null | string;
  title: string;
  pattern: null | string;
  value: null | string;
  error: null | string;
  default?: null | string;
}
