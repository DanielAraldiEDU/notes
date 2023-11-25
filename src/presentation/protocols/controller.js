/**
 * @abstract
 * @public
 *
 * @class Controller - It's the base class for all controllers.
 * @method handle - It's the base method for all controllers.
 * It's async and receive a `request` value as parameter with any value inside.
 * The `handle` method returns a Promise with `statusCode` and `body` as parameters.
 * @async handle method is async.
 */
export class Controller {
  constructor() {}

  async handle(request) {}
}
