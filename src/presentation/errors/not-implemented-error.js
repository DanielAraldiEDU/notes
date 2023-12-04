/**
 * @class NotImplementedError - Error thrown when a feature
 * doesn't exists in server.
 *
 * @extends {Error}
 */
export class NotImplementedError extends Error {
  constructor() {
    super('Not Implemented Error');
    this.name = 'NotImplemented';
  }
}
