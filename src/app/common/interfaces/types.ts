export interface CountriesObject {
  USA: CountryAtributes;
}
export interface CountryAtributes {
  code: string;
  dateFormat: string;
}

export interface RegExpObject {
  USA: RegExpAtributes;
  ESP: RegExpAtributes;
}

export interface RegExpAtributes {
  name: RegExp;
  surname: RegExp;
  age: RegExp;
  zip: RegExp;
  phone: RegExp;
  shipDate: RegExp;
  web: RegExp;
}

export interface FormInputs {
  name: HTMLElement;
  surname: HTMLElement;
  age: HTMLElement;
  zip: HTMLElement;
  phone: HTMLElement;
  shipDate: HTMLElement;
  web: HTMLElement;
  spain: HTMLElement;
  usa: HTMLElement;
  send: HTMLElement;
}

export interface objectLabels {
  USA: labelsForm;
  ESP: labelsForm;
}

export interface labelsForm {
  title: string;
  name: string;
  surname: string;
  dni: string;
  password: string;
  gender: string;
  phone: string;
  address: string;
  send: string;
  reset: string;
}

export interface objectErrors {
  USA: errorsForm;
  ESP: errorsForm;
}

export interface errorsForm {
  name: string;
  surname: string;
  dni: string;
  password: string;
  address: string;
  gender: string;
  phone: string;
}

export interface validationForm {
  name: number;
  surname: number;
  age: number;
  zip: number;
  phone: number;
  shipDate: number;
  web: number;
}
