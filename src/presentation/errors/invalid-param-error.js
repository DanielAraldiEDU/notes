/**
 * @class InvalidParamError - Error thrown when a parameter is invalid.
 * @constructor paramName is a string describing the error message.
 *
 * @extends {Error}
 */
export class InvalidParamError extends Error {
  constructor(paramName) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError';
  }
}
