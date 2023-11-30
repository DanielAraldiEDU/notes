import {
  badRequest,
  noContent,
  serverError,
  notImplemented,
} from '../helpers/index.js';
import { Controller } from '../protocols/index.js';

/**
 * @public
 * @class UpdateNoteController - Controller for update note of the user.
 * @constructor `validation` is an instance of `Validation` class
 * and `dbUpdateNoteById` to update note by id in database.
 *
 * @extends {Controller} - It's the base class for all controllers.
 */
export class UpdateNoteController extends Controller {
  constructor(validation, dbUpdateNoteById) {
    super();
    this.validation = validation;
    this.dbUpdateNoteById = dbUpdateNoteById;
  }

  async handle(request) {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const idUpdated = await this.dbUpdateNoteById.update(request);
      return idUpdated ? noContent() : notImplemented();
    } catch (error) {
      return serverError(error);
    }
  }
}
