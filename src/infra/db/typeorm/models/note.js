/**
 * @protected
 * @class Note - This class is modal from Note.
 * @constructor
 * @property {String} - The id of the note. It's an uuid.
 * @property {String} - The title of the note.
 * @property {String} - The message of the note.
 * @property {String} - The created time of the note.
 * @property {String} - The updated time of the note.
 * It can be `null`.
 */
export class Note {
  constructor(id, title, message, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
