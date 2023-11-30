/**
 * @function adaptRoute - An adapter to any route.
 * @param {Controller} controller - The controller **always** contains a single method called `handle`.
 *
 * @returns {Promise<void>} - Promise with the result of the server.
 */
export const adaptRoute = controller => {
  /**
   * @async
   * @function
   *
   * @param {*} request - The request object to be processed by handle method of the controller.
   * @param {*} reply - The reply object is used to return the result of the server.
   */
  return async (request, reply) => {
    const httpRequest = {
      ...(request.body || {}),
      deviceId: request.headers?.deviceid || null,
    };
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      reply.code(httpResponse.statusCode).send(httpResponse.body);
    } else {
      reply.code(httpResponse.statusCode).send({
        error: httpResponse.body.message,
      });
    }
  };
};
