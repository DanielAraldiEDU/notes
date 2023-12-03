import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../validation/validators/index.js';

/**
 * @function makeUpdateNoteByIdValidation - Create all validations
 * for the `UpdateNoteController`.
 *
 * @returns {ValidationComposite} - A validation composite with all
 * fields being validated.
 */
export const makeUpdateNoteByIdValidation = () => {
  const validations = [];
  validations.push(
    new RequiredFieldValidation(['id', 'deviceId', 'title', 'message'])
  );
  return new ValidationComposite(validations);
};
