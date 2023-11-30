/**
 * @protected
 * @class Note - This class is modal from Note.
 * @constructor
 * @property {String} - The id of the note. It's an uuid.
 * @property {String} - The deviceId of the user cellphone.
 * @property {String} - The title of the note.
 * @property {String} - The message of the note.
 * @property {String} - The created time of the note.
 * @property {String} - The updated time of the note.
 * It can be `null`.
 */
export class Note {
  constructor(id, deviceId, title, message, createdAt, updatedAt) {
    this.id = id;
    this.deviceId = deviceId;
    this.title = title;
    this.message = message;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
