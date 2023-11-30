/**
 * @abstract
 * @public
 *
 * @class DeleteNote - It's an impletation base to delete note.
 */
export class DeleteNote {
  constructor() {}

  /**
   * @method delete - It's the base method.
   * @async The `delete` method is async.
   *
   * @param {String} id - Receive a note `id` property to delete.
   * @returns {Promise<boolean>} - A promise boolean with note deleted
   * or not.
   */
  async delete(id) {}
}
