import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../validation/validators/index.js';

/**
 * @function makeLoadNotesByDeviceIdValidation - Create all validations
 * for the `LoadNotesController`.
 *
 * @returns {ValidationComposite} - A validation composite with all
 * fields being validated.
 */
export const makeLoadNotesByDeviceIdValidation = () => {
  const validations = [];
  validations.push(new RequiredFieldValidation(['deviceId']));
  return new ValidationComposite(validations);
};
