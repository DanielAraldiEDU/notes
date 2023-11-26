import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../validation/validators/index.js';

/**
 * @function makeAddNoteValidation - Create all validations for the
 * `AddNoteController`.
 *
 * @returns {ValidationComposite} - A validation composite with all
 * fields being validated.
 */
export const makeAddNoteValidation = () => {
  const validations = [];
  validations.push(new RequiredFieldValidation(['title', 'message']));
  return new ValidationComposite(validations);
};
