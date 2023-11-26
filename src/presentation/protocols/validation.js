/**
 * @abstract
 * @public
 *
 * @class Validation - It's the base class for all validations.
 */
export class Validation {
  constructor() {}

  /**
   * @method validate - It's the base method for all validations.
   *
   * @param {*} input - Receive a `input` value as parameter with any value inside.
   * @returns {Error | null} - The `validate` method
   * returns a new instance of the some `Error` class or null if validation succeeded.
   */
  validate(input) {}
}
