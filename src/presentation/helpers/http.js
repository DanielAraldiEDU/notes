import { ServerError } from '../errors';

/**
 * @param {Error} error - The error that occurred during the request.
 * @returns HttpResponse - The response from the server that caused the error.
 * @returns HttpResponse.statusCode - The status code that was returned from the server.
 * @returns HttpResponse.body - The response body that was returned from the server. It's instance of error object.
 */
export const badRequest = error => ({
  statusCode: 400,
  body: error,
});

/**
 * @param {Error} error.stack - The stack error that occurred during the request.
 * @returns HttpResponse - The response from the server that caused the error.
 * @returns HttpResponse.statusCode - The status code that was returned from the server.
 * @returns HttpResponse.body - The response body that was returned from the server. It's instance of `ServerError`.
 */
export const serverError = ({ stack }) => ({
  statusCode: 500,
  body: new ServerError(stack),
});

/**
 * @param {any} data - The data returned with success of the server.
 * @returns HttpResponse - The response from the server with success.
 * @returns HttpResponse.statusCode - The status code that was returned from the server.
 * @returns HttpResponse.body - The response body that was returned from the server. It's any thing.
 */
export const ok = data => ({
  statusCode: 200,
  body: data,
});

/**
 * @returns HttpResponse - The response from the server with success.
 * @returns HttpResponse.statusCode - The status code that was returned from the server.
 * @returns HttpResponse.body - The response body that was returned from the server. It's `null`.
 */
export const noContent = () => ({
  statusCode: 204,
  body: null,
});
