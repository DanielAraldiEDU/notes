/**
 * @class ServerError
 * @constructor paramName is a string to stack error.
 *
 * @extends {Error}
 */
export class ServerError extends Error {
  constructor(stack) {
    super('Internal Server Error');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
