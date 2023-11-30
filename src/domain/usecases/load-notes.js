/**
 * @abstract
 * @public
 *
 * @class LoadNote - It's an impletation base to load notes.
 */
export class LoadNote {
  constructor() {}

  /**
   * @method load - It's the base method.
   * @async The `load` method is async.
   *
   * @param {String} deviceId - Receive a `deviceId` value from the user.
   * @returns {Promise<Note[]>} - A promise that contains all notes of
   * the user with device id.
   */
  async load(deviceId) {}
}
