/**
 * @field port - The port to connect to on server.
 * @field databasePort - The port to connect in database.
 */
export default {
  port: process.env.PORT || 3333,
  databasePort: process.env.DATABASE_PORT || 8080,
};
