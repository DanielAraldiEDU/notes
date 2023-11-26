import { badRequest, ok, serverError } from '../helpers/index.js';
import { Controller } from '../protocols/index.js';

/**
 * @public
 * @class AddNoteController - Controller for adding notes.
 * @constructor validation is an instance of `Validation` class.
 *
 * @extends {Controller} - It's the base class for all controllers.
 */
export class AddNoteController extends Controller {
  constructor(validation) {
    super();
    this.validation = validation;
  }

  async handle(request) {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      return ok(null);
    } catch (error) {
      return serverError(error);
    }
  }
}
