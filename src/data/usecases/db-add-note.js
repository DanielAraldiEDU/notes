import { AddNote } from '../../domain';

/**
 * @public
 * @class `DbAddNote` - It's an implementation of database add note.
 *
 * @constructor `addNoteRepository` - It's an implementation of database add note repository.
 */
export class DbAddNote extends AddNote {
  constructor(addNoteRepository) {
    super();
    this.addNoteRepository = addNoteRepository;
  }

  async add(note) {
    return this.addNoteRepository.add(note);
  }
}
