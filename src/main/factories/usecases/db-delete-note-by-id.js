import { DbDeleteNoteById } from '../../../data/usecases/db-delete-note-by-id.js';
import { NoteTypeOrmRepository } from '../../../infra/db/typeorm/index.js';

/**
 * @function makeDbDeleteNoteById - Create a new instance of `DbDeleteNoteById`.
 *
 * @returns {DbDeleteNoteById} - The new instance of `DbDeleteNoteById`
 * with implementation in `NoteTypeOrmRepository`.
 */
export const makeDbDeleteNoteById = () => {
  const repository = new NoteTypeOrmRepository();
  return new DbDeleteNoteById(repository);
};
