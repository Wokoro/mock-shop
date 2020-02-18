/**
 * @author Wokoro Douye Samuel
 */

import dotenv from 'dotenv';

dotenv.config();

/**
 * @description - A function to load all high level middlewares
 *
 * @param {object} middlewares - Array of middlewares to be added to the route.
 *
 * @param {object} router - Express router object.
 *
 * @returns {void} - No return value.
 */
export const middlewareLoader = (middlewares, router) => {
  for (const middleware of middlewares) {
    middleware(router);
  }
};

/**
 * @description - A function to load all routes
 *
 * @param {object} routes - Array of routes to be included.
 *
 * @param {object} router - Express router object.
 *
 * @returns {void} - No return value.
 */
export const routesLoader = (routes, router) => {
  for (const route of routes) {
    const { path, handlers, method } = route;
    (router)[method](path, handlers);
  }
};

/**
 * @description - A function to send client success message
 *
 * @param {obejct} res - HTTP response object
 *
 * @param {integer} code - HTTP status code to send
 *
 * @param {string} data - Data to send to the client
 *
 * @returns {object} Returns status code and data to client
 */
export const sendSuccessMessage = (res, code, data) => res.status(code).send({
  status: 'success',
  data
});

/**
 * @description - A function to send client error message.
 *
 * @param {object} res - HTTP response object
 *
 * @param {integer} code - HTTP status code to send
 *
 * @param {string} error - Data to send to the client
 *
 * @returns {object} Returns status code and data to client
 */
export const sendErrorMessage = (res, code, error) => res.status(code).send({
  status: 'error',
  error
});
