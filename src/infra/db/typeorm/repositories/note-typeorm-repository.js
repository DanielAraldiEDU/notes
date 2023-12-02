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
    /* 
    INSERT INTO notes VALUES 
    ('0e9c8b73-c8e0-4afd-b778-70a9c5f72e2e','655d23b84c3ee162','Título', 'Mensagem', CURRENT_TIMESTAMP, null);
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
    /*
    SELECT *
    FROM notes
    WHERE notes.deviceId = '9a6723d7beea487c3673dc82948ff8c3770a266f30afddc309add5a8d52b2d31'
    ORDER BY COALESCE(notes.updatedAt, notes.createdAt) DESC
    */
    const notes = await repository
      .createQueryBuilder('notes')
      .where('notes.deviceId = :deviceId', { deviceId }) 
      .orderBy({'COALESCE(notes.updatedAt, notes.createdAt)': 'DESC'})
      .getMany();
      /*
      .where('COALESCE(notes.updatedAt, notes.createdAt)': 'DESC')
     
      .orderBy({ 'notes.createdAt': 'DESC' }) */
      
    return notes || [];
  }

  /**
   * @method update - It's the base method.
   * @async The `update` method is async.
   *
   * @param {Note} update - Receive a note object with values
   * to be updated.
   * @returns {Promise<boolean>} - A promise boolean with note
   * updated or not.
   */
  async update(note) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return false;

    const { id, deviceId, title, message } = note;
    /*
    UPDATE notes
    SET title = 'Título Editado', message = 'Mensagem Editada', updatedAt = CURRENT_TIMESTAMP
    WHERE notes.id = '25912976-1c02-4db0-90b6-6a288c9a9075'
    AND notes.deviceId = '9a6723d7beea487c3673dc82948ff8c3770a266f30afddc309add5a8d52b2d31';
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
   * @param {String} id - Receive a note `id` to select and
   * delete note.
   * @returns {Promise<boolean>} - A promise boolean with note
   * deleted or not.
   */
  async delete(id) {
    const repository = TypeOrmHelper.getRepository(Note);
    if (!repository) return false;
    /*
    DELETE FROM notes
    WHERE notes.id = '25912976-1c02-4db0-90b6-6a288c9a9075'
    */
    const result = await repository
      .createQueryBuilder('notes')
      .delete()
      .from(NoteEntity)
      .where('notes.id = :id', { id })
      .execute();

    return !!result.affected;
  }
}
