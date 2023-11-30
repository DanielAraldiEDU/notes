import { DeleteNote } from '../../domain/index.js';

/**
 * @public
 * @class `DbDeleteNoteById` - It's an intermediate data between
 * controllers and database
 *
 * @constructor `deleteNoteByIdRepository` - It's an implementation of
 * database delete note repository.
 */
export class DbDeleteNoteById extends DeleteNote {
  constructor(deleteNoteByIdRepository) {
    super();
    this.deleteNoteByIdRepository = deleteNoteByIdRepository;
  }

  async delete(id) {
    return await this.deleteNoteByIdRepository.delete(id);
  }
}
