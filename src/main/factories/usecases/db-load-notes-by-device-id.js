import { DbLoadNotesByDeviceId } from '../../../data/usecases/db-load-notes-by-device-id.js';
import { NoteTypeOrmRepository } from '../../../infra/db/typeorm/index.js';

/**
 * @function makeDbLoadNotesByDeviceId - Create a new instance of
 * `DbLoadNotesByDeviceId`.
 *
 * @returns {DbLoadNotesByDeviceId} - The new instance of `DbLoadNotesByDeviceId`
 * with implementation in `NoteTypeOrmRepository`.
 */
export const makeDbLoadNotesByDeviceId = () => {
  const repository = new NoteTypeOrmRepository();
  return new DbLoadNotesByDeviceId(repository);
};
