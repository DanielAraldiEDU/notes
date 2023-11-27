/**
 * @abstract
 * @public
 *
 * @class AddNote - It's an impletation base to add notes.
 */
export class AddNote {
  constructor() {}

  /**
   * @method add - It's the base method.
   * @async The `add` method is async.
   *
   * @param {Note} note - Receive a `note` value as parameter
   * with `title` and `message` values inside.
   * @returns {Promise<string | null>} - A promise that contains the
   * `id` from note created or `null`.
   */
  async add(note) {}
}
