export default fastify => {
  fastify.get('/', async function handler(request, reply) {
    return { hello: 'world!' };
  });
};
