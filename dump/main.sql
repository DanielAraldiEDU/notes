SET SQL_SAFE_UPDATES = 0;

-- Create schema notes_db
CREATE SCHEMA IF NOT EXISTS notes_db;
-- Using schema notes_db
USE notes_db;

-- Create table notes
CREATE TABLE notes (
  id VARCHAR(255) PRIMARY KEY,
  deviceId VARCHAR(255) NOT NULL,
  title VARCHAR(1600) NOT NULL,
  message VARCHAR(6400) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME
);

-- Inserted some datas 
INSERT INTO notes VALUES ('0e9c8b73-c8e0-4afd-b778-70a9c5f72e2e','655d23b84c3ee162','Title', 'Message', CURRENT_TIMESTAMP, null);
INSERT INTO notes VALUES ('d3ed67dc-e052-4395-a835-d9c6203ed206','9a6723d7beea487c3673dc82948ff8c3770a266f30afddc309add5a8d52b2d31','Title', 'Message', CURRENT_TIMESTAMP, null);

SELECT *
FROM notes
WHERE notes.deviceId = ':notes.deviceId' -- Some note device id
ORDER BY COALESCE(notes.updatedAt, notes.createdAt) DESC;

UPDATE notes
SET title = 'Edited title', message = 'Edited message', updatedAt = CURRENT_TIMESTAMP -- Some note's title, message and updatedAt
WHERE notes.id = ':note.id' -- Some note id
AND notes.deviceId = ':notes.deviceId'; -- Some note device id

DELETE FROM notes
WHERE notes.id = ':note.id'; -- Some note id

-- Delete notes table
DROP TABLE notes;
