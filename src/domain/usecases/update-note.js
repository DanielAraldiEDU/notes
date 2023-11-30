/**
 * @abstract
 * @public
 *
 * @class UpdateNote - It's an impletation base to update notes.
 */
export class UpdateNote {
  constructor() {}

  /**
   * @method update - It's the base method.
   * @async The `update` method is async.
   *
   * @param {Note} note - Receive a `note` value as parameter
   * with `title`, `message`, `deviceId` and `id` values inside.
   * @returns {Promise<boolean>} - A promise boolean with note updated
   * or not.
   */
  async update(note) {}
}
