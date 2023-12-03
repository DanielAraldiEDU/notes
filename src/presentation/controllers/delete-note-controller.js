import {
  badRequest,
  notImplemented,
  noContent,
  serverError,
} from '../helpers/index.js';
import { Controller } from '../protocols/index.js';

/**
 * @public
 * @class DeleteNoteController - Controller for delete a note.
 * @constructor `validation` is an instance of `Validation` class
 * and `dbDeleteNoteById` to delete the note in database, it's
 * an `DbDeleteNoteById` class.
 *
 * @extends {Controller} - It's the base class for all controllers.
 */
export class DeleteNoteController extends Controller {
  constructor(validation, dbDeleteNoteById) {
    super();
    this.validation = validation;
    this.dbDeleteNoteById = dbDeleteNoteById;
  }

  async handle(request) {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const isDeleted = await this.dbDeleteNoteById.delete(request);
      return isDeleted ? noContent() : notImplemented();
    } catch (error) {
      return serverError(error);
    }
  }
}
