import { EntitySchema } from 'typeorm';
import { Note } from '../models/index.js';

/**
 * @constant NoteEntity - The entity note.
 * @type Entity Note to be used for database queries.
 */
export const NoteEntity = new EntitySchema({
  name: 'Notes',
  target: Note,
  tableName: 'notes',
  synchronize: true,
  columns: {
    id: {
      name: 'id',
      type: 'uuid',
      generated: 'uuid',
      nullable: false,
      primary: true,
    },
    deviceId: {
      name: 'deviceId',
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    title: {
      name: 'title',
      type: 'varchar',
      length: 1600,
      nullable: false,
    },
    message: {
      name: 'message',
      type: 'varchar',
      length: 6400,
      nullable: false,
    },
    createdAt: {
      name: 'createdAt',
      type: 'datetime',
      nullable: false,
    },
    updatedAt: {
      name: 'updatedAt',
      type: 'datetime',
      nullable: true,
    },
  },
});
