import { AddNoteController } from '../../../presentation/controllers/index.js';
import { makeDbAddNote } from '../usecases/index.js';
import { makeAddNoteValidation } from './add-note-validation-factory.js';

/**
 * @function makeAddNoteController - Add to `AddNoteController` class
 * all parameters in your constructor.
 *
 * @returns {Controller} - An instance of `AddNoteController` class
 * that will be used on routes.
 */
export const makeAddNoteController = () =>
  new AddNoteController(makeAddNoteValidation(), makeDbAddNote());
