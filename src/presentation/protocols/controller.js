/**
 * @abstract
 * @public
 *
 * @class Controller - It's the base class for all controllers.
 */
export class Controller {
  constructor() {}

  /**
   * @method handle - It's the base method for all controllers.
   * @async The `handle` method is async.
   *
   * @param {*} request - Receive a `request` value as parameter with any value inside.
   * @returns {Promise<HttpResponse>} - A promise that contains the response with status code and body.
   */
  async handle(request) {}
}
