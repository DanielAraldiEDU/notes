import { DbAddNote } from '../../../data/usecases/db-add-note.js';
import { NoteTypeOrmRepository } from '../../../infra/db/typeorm/index.js';

/**
 * @function makeDbAddNote - Create a new instance of `DbAddNote`.
 *
 * @returns {DbAddNote} - The new instance of `DbAddNote` with
 * implementation in `NoteTypeOrmRepository`.
 */
export const makeDbAddNote = () => {
  const repository = new NoteTypeOrmRepository();
  return new DbAddNote(repository);
};
