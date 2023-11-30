import { adaptRoute } from '../adapters/index.js';
import {
  makeAddNoteController,
  makeLoadNotesController,
  makeUpdateNoteController,
} from '../factories/index.js';

/**
 * @function routes - The routes manager for all routes.
 * @param {*} router - The router instance to use for the routes.
 */
export function routes(router) {
  router.get('/notes', adaptRoute(makeLoadNotesController()));
  router.post('/note', adaptRoute(makeAddNoteController()));
  router.put('/note', adaptRoute(makeUpdateNoteController()));
  router.delete('/note', () => {});
}
