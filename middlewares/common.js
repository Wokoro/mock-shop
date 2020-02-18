/**
 * @author - Wokoro Douye Samuel
 */

import compression from 'compression';
import cors from 'cors';
import parser from 'body-parser';

/**
 * @description - Middleware to compress response to client.
 * 
 * @param {object} router - Express router object
 * 
 * @returns {void} - No return value
 */
export const compressionHandler = (router) => {
  router.use(compression());
};

/**
 * @description - Middleware to compress response to client.
 * 
 * @param {Object} router - Express router object
 * 
 * @returns {Void} - No return value
 */
export const corsHandler = (router) => {
  router.use(cors({ credentials: true, origin: true }));
};

/**
 * @description - Middleware to extract parameter(s) from request object.
 * 
 * @param {object} router - Express router object
 * 
 * @returns {void} - No return value
 */
export const bodyParserHandler = (router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};
