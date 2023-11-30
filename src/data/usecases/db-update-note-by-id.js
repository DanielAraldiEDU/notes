import { UpdateNote } from '../../domain/index.js';

/**
 * @public
 * @class `DbUpdateNoteById` - It's an intermediate data between
 * controllers and database
 *
 * @constructor `updateNoteByIdRepository` - It's an implementation of
 * database to update notes by id repository.
 */
export class DbUpdateNoteById extends UpdateNote {
  constructor(updateNoteByIdRepository) {
    super();
    this.updateNoteByIdRepository = updateNoteByIdRepository;
  }

  async update(note) {
    const onlyValuesThatExistsInNote = {};
    for (const property in note) {
      if (note[property]) onlyValuesThatExistsInNote[property] = note[property];
    }
    return await this.updateNoteByIdRepository.update(
      onlyValuesThatExistsInNote
    );
  }
}
