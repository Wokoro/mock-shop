/**
 * @author Wokoro Douye Samuel
 */

import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

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


/**
 * @description - Function to encrypt user password
 *
 * @param {string} password - User's plain password to encrypt
 *
 * @returns {object} - Returns the encrypted password
 */
export const encryptPassword = password => bcrypt.hashSync(password, 10);

/**
 * @description - Function to filter user account details
 *
 * @param {string} param0 - User's firstname
 *
 * @param {string} param1 - User's lastname
 *
 * @param {boolean} param2 - User's isadmin
 *
 * @param {string} param3 - User's account creation time
 *
 * @param {string} param4 - User's account update time
 *
 * @returns {object} - Returns filtered user details
 */
export const filterUserInfo = (
  {
    firstname, lastname, email, isadmin, createdAt, updatedAt
  }
) => ({
  firstname, lastname, email, isadmin, createdAt, updatedAt
});
