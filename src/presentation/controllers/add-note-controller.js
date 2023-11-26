import { badRequest, ok, serverError } from '../helpers/index.js';
import { Controller } from '../protocols/index.js';

/**
 * @public
 * @class AddNoteController - Controller for adding notes.
 * @constructor `validation` is an instance of `Validation` class
 * and `dbAddNote` to add the note in database, it's an `DbAddNote` class.
 *
 * @extends {Controller} - It's the base class for all controllers.
 */
export class AddNoteController extends Controller {
  constructor(validation, dbAddNote) {
    super();
    this.validation = validation;
    this.dbAddNote = dbAddNote;
  }

  async handle(request) {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const id = await this.dbAddNote.add(request);
      return ok({ id });
    } catch (error) {
      return serverError(error);
    }
  }
}
