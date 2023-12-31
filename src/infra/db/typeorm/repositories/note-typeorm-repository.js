import { NoteEntity } from '../entities/index.js';
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

    const { title, message, deviceId } = note;

    const newNote = new Note();
    newNote.deviceId = deviceId;
    newNote.title = title;
    newNote.message = message;
    newNote.createdAt = new Date();
    newNote.updatedAt = null;

    /**
     * INSERT INTO notes
     * VALUES (':id',':deviceId',':title', ':message', CURRENT_TIMESTAMP, null);
     */
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

    /**
     * SELECT *
     * FROM notes
     * WHERE notes.deviceId = ':deviceId'
     * ORDER BY COALESCE(notes.updatedAt, notes.createdAt) DESC;
     */
    const notes = await repository
      .createQueryBuilder('notes')
      .where('notes.deviceId = :deviceId', { deviceId })
      .orderBy({ 'COALESCE(notes.updatedAt, notes.createdAt)': 'DESC' })
      .getMany();
    return notes || [];
  }

  /**
   * @method update - It's the base method.
   * @async The `update` method is async.
   *
   * @param {Note} note - Receive a note object with values
   * to be updated.
   * @returns {Promise<boolean>} - A promise boolean with note
   * updated or not.
   */
  async update(note) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return false;

    const { id, deviceId, title, message } = note;

    /**
     * UPDATE notes
     * SET title = 'Título Editado', message = 'Mensagem Editada', updatedAt = CURRENT_TIMESTAMP
     * WHERE notes.id = ':id'
     * AND notes.deviceId = ':deviceId';
     */
    const result = await repository
      .createQueryBuilder('notes')
      .update(NoteEntity)
      .set({
        title,
        message,
        updatedAt: new Date(),
      })
      .where('notes.id = :id', { id })
      .andWhere('notes.deviceId = :deviceId', { deviceId })
      .execute();

    return !!result.affected;
  }

  /**
   * @method delete - It's the base method.
   * @async The `delete` method is async.
   *
   * @param {String} credentials - Receive a note `id` and `deviceId` of the user
   * to delete a note.
   * @returns {Promise<boolean>} - A promise boolean with note
   * deleted or not.
   */
  async delete(credentials) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return false;

    const { id, deviceId } = credentials;

    /**
     * DELETE FROM notes
     * WHERE notes.id = ':id'
     * AND notes.deviceId = ':deviceId';
     */
    const result = await repository
      .createQueryBuilder('notes')
      .delete()
      .from(NoteEntity)
      .where('notes.id = :id', { id })
      .andWhere('notes.deviceId = :deviceId', { deviceId })
      .execute();

    return !!result.affected;
  }
}
