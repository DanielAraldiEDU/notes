import { MissingParamError } from '../../presentation/errors/missing-param-error.js';
import { Validation } from '../../presentation/protocols/index.js';

/**
 * @public
 * @class RequiredFieldValidation - A validator to required fields.
 * @constructor fieldNames is an array of strings. It's used to validate
 * required fields that are not present in the request body.
 *
 * @extends {Validation} - It's the base class for all validations.
 */
export class RequiredFieldValidation extends Validation {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(input) {
    for (const fieldName of this.fieldNames) {
      if (!input[fieldName]) return new MissingParamError(fieldName);
    }
    return null;
  }
}
