import { Table } from 'typeorm';

export class Note1701115363008 {
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
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'message',
            type: 'varchar',
            isNullable: false,
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

  async down(queryRunner) {
    await queryRunner.dropTable('notes');
  }
}
