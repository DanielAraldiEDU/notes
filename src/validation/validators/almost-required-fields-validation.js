import { MissingParamError } from '../../presentation/errors/index.js';
import { Validation } from '../../presentation/protocols/index.js';

/**
 * @public
 * @class AlmostRequiredFieldValidation - This validator ensures at
 * least one field must be required
 * @constructor fieldNames is an array of strings. It's used to validate
 * required fields that are not present in the request body.
 *
 * @extends {Validation} - It's the base class for all validations.
 */
export class AlmostRequiredFieldValidation extends Validation {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(input) {
    const fieldNames = [];
    for (const fieldName of this.fieldNames) {
      if (!input[fieldName]) {
        fieldNames.push(fieldName);
      }
    }

    if (this.fieldNames.length === fieldNames.length) {
      const message =
        fieldNames.length === 1 ? fieldNames[0] : fieldNames.join(' or ');
      return new MissingParamError(message);
    }

    return null;
  }
}
