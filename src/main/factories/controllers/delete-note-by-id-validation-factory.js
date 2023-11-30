import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../validation/validators/index.js';

/**
 * @function makeDeleteNoteByIdValidation - Create all validations
 * for the `DeleteNoteController`.
 *
 * @returns {ValidationComposite} - A validation composite with all
 * fields being validated.
 */
export const makeDeleteNoteByIdValidation = () => {
  const validations = [];
  validations.push(new RequiredFieldValidation(['id']));
  return new ValidationComposite(validations);
};
