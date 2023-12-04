import { Table } from 'typeorm';

/**
 * CREATE SCHEMA IF NOT EXISTS notes_db;
 * USE notes_db;
 */
export class Note1701115363008 {
  /**
   * CREATE TABLE notes (
   *  id VARCHAR(255) PRIMARY KEY,
   *  deviceId VARCHAR(255) NOT NULL,
   *  title VARCHAR(1600) NOT NULL,
   *  message VARCHAR(6400) NOT NULL,
   *  createdAt DATETIME NOT NULL,
   *  updatedAt DATETIME
   * );
   */
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'notes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'uuid',
          },
          {
            name: 'deviceId',
            type: 'varchar',
            isNullable: false,
            length: 255,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
            length: 1600,
          },
          {
            name: 'message',
            type: 'varchar',
            isNullable: false,
            length: 6400,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            isNullable: true,
          },
        ],
      })
    );
  }

  /**
   * DROP TABLE notes;
   */
  async down(queryRunner) {
    await queryRunner.dropTable('notes');
  }
}
