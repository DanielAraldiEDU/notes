/**
 * @abstract
 * @public
 *
 * @class Controller - It's the base class for all controllers.
 * @method handle - It's the base method for all controllers. The `handle` method
 * returns a Promise with `statusCode` and `body` as parameters.
 * @property Receive a `request` value as parameter with any value inside.
 * @async The `handle` method is async.
 */
export class Controller {
  constructor() {}

  async handle(request) {}
}
