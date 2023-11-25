/**
 * @class MissingParamError
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
