/**
 * @abstract
 * @public
 *
 * @class AddNoteRepository - It's a repository base to add notes.
 */
export class AddNoteRepository {
  constructor() {}

  /**
   * @method add - It's the base method.
   * @async The `add` method is async.
   *
   * @param {Note} note - Receive a `note` value as parameter
   * with `title` and `message` values inside.
   * @returns {Promise<string | null>} - A promise that contains the
   * `id` from note created or `null` if repository doesn't exists.
   */
  async add(note) {}
}
