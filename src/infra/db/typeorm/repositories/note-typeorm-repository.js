import { TypeOrmHelper } from '../helpers/index.js';
import { Note } from '../models/index.js';

/**
 * @public
 * @class NoteTypeOrmRepository - It represents all call types
 * to note.
 */
export class NoteTypeOrmRepository {
  constructor() {}

  /**
   * @method add - It's the base method.
   * @async The `add` method is async.
   *
   * @param {Note} note - Receive a `note` value as parameter
   * with `title` and `message` values inside.
   * @returns {Promise<string | null>} - A promise that contains the
   * `id` from note created or `null` if repository doesn't exists.
   */
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

  /**
   * @method load - It's the base method.
   * @async The `load` method is async.
   *
   * @param {String} deviceId - Receive a `deviceId` value from the user.
   * @returns {Promise<Note[]>} - A promise that contains all notes of
   * the user with device id.
   */
  async load(deviceId) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return [];

    const notes = await repository
      .createQueryBuilder('notes')
      .where('notes.deviceId = :deviceId', { deviceId })
      .orderBy('notes.createdAt', 'DESC')
      .getMany();
    return notes || [];
  }
}
