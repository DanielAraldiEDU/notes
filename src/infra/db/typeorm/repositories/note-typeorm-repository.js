import { AddNoteRepository } from '../../../../data/protocols/db/index.js';
import { TypeOrmHelper } from '../helpers/index.js';
import { Note } from '../models/index.js';

/**
 * @public
 * @class NoteTypeOrmRepository - It represents all call types
 * to note.
 */
export class NoteTypeOrmRepository extends AddNoteRepository {
  constructor() {
    super();
  }

  async add(note) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return null;

    const newNote = new Note();
    newNote.message = note.message;
    newNote.title = note.title;
    newNote.deviceId = note.deviceId;
    newNote.createdAt = new Date();
    newNote.updatedAt = null;
    const { id } = await repository.save(newNote);
    return id;
  }
}
