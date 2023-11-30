import { LoadNote } from '../../domain/index.js';

/**
 * @public
 * @class `DbLoadNotesByDeviceId` - It's an intermediate data between
 * controllers and database
 *
 * @constructor `loadNotesByDeviceIdRepository` - It's an implementation of
 * database to load notes by device id repository.
 */
export class DbLoadNotesByDeviceId extends LoadNote {
  constructor(loadNotesByDeviceIdRepository) {
    super();
    this.loadNotesByDeviceIdRepository = loadNotesByDeviceIdRepository;
  }

  async load(deviceId) {
    return await this.loadNotesByDeviceIdRepository.load(deviceId);
  }
}
