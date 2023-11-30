import { DbUpdateNoteById } from '../../../data/usecases/db-update-note-by-id.js';
import { NoteTypeOrmRepository } from '../../../infra/db/typeorm/index.js';

/**
 * @function makeDbUpdateNoteById - Create a new instance of
 * `DbUpdateNoteById`.
 *
 * @returns {DbUpdateNoteById} - The new instance of `DbUpdateNoteById`
 * with implementation in `NoteTypeOrmRepository`.
 */
export const makeDbUpdateNoteById = () => {
  const repository = new NoteTypeOrmRepository();
  return new DbUpdateNoteById(repository);
};
