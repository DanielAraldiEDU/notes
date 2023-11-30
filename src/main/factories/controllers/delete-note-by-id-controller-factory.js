import { DeleteNoteController } from '../../../presentation/controllers/index.js';
import { makeDbDeleteNoteById } from '../usecases/index.js';
import { makeDeleteNoteByIdValidation } from './delete-note-by-id-validation-factory.js';

/**
 * @function makeDeleteNoteController - Add to `DeleteNoteController`
 * class all parameters in your constructor.
 *
 * @returns {Controller} - An instance of `UpdateNoteController` class
 * that will be used on routes.
 */
export const makeDeleteNoteController = () =>
  new DeleteNoteController(
    makeDeleteNoteByIdValidation(),
    makeDbDeleteNoteById()
  );
