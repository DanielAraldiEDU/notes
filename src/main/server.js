import app from './config/app.js';
import env from './config/env.js';

try {
  await app.listen({ port: env.port });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
