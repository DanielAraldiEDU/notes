import { routes } from '../routes/note-routes.js';

/**
 * @param {*} app - The register will be used to create routes
 * and add prefix `/api` to routes.
 */
export function setupRoutes(app) {
  app.register(
    function (router, _, done) {
      routes(router);
      done();
    },
    { prefix: '/api' }
  );
}
