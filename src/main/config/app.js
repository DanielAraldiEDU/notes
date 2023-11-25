import Fastify from 'fastify';

import { setupRoutes } from './routes.js';

const app = Fastify({
  logger: true,
});

setupRoutes(app);

export default app;
