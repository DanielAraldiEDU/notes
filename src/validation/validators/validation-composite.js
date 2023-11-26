import { Validation } from '../../presentation/protocols/index.js';

/**
 * @public
 * @class ValidationComposite - It's a validation composite to validate
 * all validators.
 * @constructor validations is an array of validations. It's used to validate
 * all validators.
 *
 * @extends {Validation} - It's the base class for all validations.
 */
export class ValidationComposite extends Validation {
  constructor(validations) {
    super();
    this.validations = validations;
  }

  validate(input) {
    for (const validation of this.validations) {
      const error = validation.validate(input);
      if (error) return error;
    }
    return null;
  }
}
