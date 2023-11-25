import Fastify from 'fastify';
import appRoute from './routes.js';

const fastify = Fastify({
  logger: true,
});

appRoute(fastify);

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
