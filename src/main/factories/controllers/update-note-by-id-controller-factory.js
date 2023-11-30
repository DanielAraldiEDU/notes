import { UpdateNoteController } from '../../../presentation/controllers/index.js';
import { makeDbUpdateNoteById } from '../usecases/index.js';
import { makeUpdateNoteByIdValidation } from './update-note-by-id-validation-factory.js';

/**
 * @function makeUpdateNoteController - Add to `UpdateNoteController`
 * class all parameters in your constructor.
 *
 * @returns {Controller} - An instance of `UpdateNoteController` class
 * that will be used on routes.
 */
export const makeUpdateNoteController = () =>
  new UpdateNoteController(
    makeUpdateNoteByIdValidation(),
    makeDbUpdateNoteById()
  );
