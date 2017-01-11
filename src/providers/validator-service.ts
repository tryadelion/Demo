import { Injectable } from '@angular/core';

/*
  Generated class for the ValidatorService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ValidatorService {

  constructor() {
    console.log('Hello ValidatorService Provider');
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Camp obligatori',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Mínim ${validatorValue.requiredLength} caràcters`
    };

    return config[validatorName];
  }

}
