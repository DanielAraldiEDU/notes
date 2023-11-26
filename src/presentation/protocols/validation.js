/**
 * @abstract
 * @public
 *
 * @class Validation - It's the base class for all validations.
 * @method validate - It's the base method for all validations. The `validate` method
 * returns a new instance of the some `Error` class or null if validation succeeded.
 * @property Receive a `input` value as parameter with any value inside.
 */
export class Validation {
  constructor() {}

  validate(input) {}
}
