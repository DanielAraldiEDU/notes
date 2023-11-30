import { badRequest, ok, serverError } from '../helpers/index.js';
import { Controller } from '../protocols/index.js';

/**
 * @public
 * @class LoadNotesController - Controller for load notes of the user.
 * @constructor `validation` is an instance of `Validation` class
 * and `dbLoadNotesByDeviceId` to load notes by device id in database.
 *
 * @extends {Controller} - It's the base class for all controllers.
 */
export class LoadNotesController extends Controller {
  constructor(validation, dbLoadNotesByDeviceId) {
    super();
    this.validation = validation;
    this.dbLoadNotesByDeviceId = dbLoadNotesByDeviceId;
  }

  async handle(request) {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const notes = await this.dbLoadNotesByDeviceId.load(request.deviceId);
      return ok({ notes });
    } catch (error) {
      return serverError(error);
    }
  }
}
