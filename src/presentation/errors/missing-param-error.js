/**
 * @class MissingParamError - Error thrown when a parameter is missing.
 * @constructor paramName is a string describing the error message.
 *
 * @extends {Error}
 */
export class MissingParamError extends Error {
  constructor(paramName) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError';
  }
}
