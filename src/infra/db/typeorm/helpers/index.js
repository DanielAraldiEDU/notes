import { DataSource } from 'typeorm';

import { NoteEntity } from '../entities/index.js';
import { Note1701115363008 } from '../migrations/index.js';
import env from '../../../../main/config/env.js';

/**
 * @constant {TypeOrmHelper} - The TypeOrmHelper is used to
 * manage the TypeORM.
 */
export const TypeOrmHelper = {
  /**
   * @prop {DataSource} dataSource - The data source is used to
   * called all operations in database. It can be `null` if
   * doesn't created.
   */
  dataSource: null,

  /**
   * @method isInitialized - Should be called to check if the
   * `dataSource` is initialized or not.
   * @returns {boolean}
   */
  isInitialized() {
    return this.dataSource && this.dataSource.isInitialized;
  },

  /**
   * @method create - It is used to create a instance of data source.
   * It must be called before **any** operations.
   */
  create() {
    this.dataSource = new DataSource({
      type: 'sqlite',
      host: 'localhost',
      port: env.databasePort,
      synchronize: true,
      migrationsRun: true,
      logging: false,
      database: './src/infra/db/typeorm/database/database.sqlite',
      entities: [NoteEntity],
      migrations: [Note1701115363008],
    });
  },

  /**
   * @method getRepository - Get a repository.
   * @param {Model} repository - Repository model to get
   * all results.
   * @returns {Repository | null} - Returns the repository
   * or `null` if repository doesn't not exists.
   */
  getRepository(repository) {
    if (this.isInitialized()) {
      return this.dataSource.getRepository(repository);
    }
    return null;
  },

  /**
   * @async
   * @method initialize - It initializes the database.
   */
  async initialize() {
    if (!this.isInitialized()) {
      await this.dataSource.initialize();
    }
  },
};
