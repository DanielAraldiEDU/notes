import { EntitySchema } from 'typeorm';
import { Note } from '../models/index.js';

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
      length: 6500,
      nullable: false,
    },
    message: {
      name: 'message',
      type: 'varchar',
      length: 65000,
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
