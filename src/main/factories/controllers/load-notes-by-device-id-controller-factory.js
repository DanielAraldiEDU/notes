import { LoadNotesController } from '../../../presentation/controllers/index.js';
import { makeDbLoadNotesByDeviceId } from '../usecases/index.js';
import { makeLoadNotesByDeviceIdValidation } from './load-notes-by-device-id-validation-factory.js';

/**
 * @function makeLoadNotesController - Add to `LoadNotesController`
 * class all parameters in your constructor.
 *
 * @returns {Controller} - An instance of `LoadNotesController` class
 * that will be used on routes.
 */
export const makeLoadNotesController = () =>
  new LoadNotesController(
    makeLoadNotesByDeviceIdValidation(),
    makeDbLoadNotesByDeviceId()
  );
