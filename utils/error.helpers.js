/**
 * @author Wokoro Douye Samuel
 */

import { HttpClientError } from './error.spec';
import { sendErrorMessage } from '.';

/**
 * @description Route not found error helper method.
 *
 * @param {object} router - Express router to be passed.
 *
 * @return {void} Returns nothing.
 */
export const notFoundError = (router) => {
  router.use((req, res) => {
    sendErrorMessage(res, 404, 'Page not found');
  });
};

/**
 * @description Client error helper method.
 *
 * @param {object} router - Express router to be passed.
 *
 * @return {void} Returns nothing.
 */
export const clientError = (router) => {
  router.use((err, req, res, next) => {
    if (err instanceof HttpClientError) {
      console.log(err);
      sendErrorMessage(res, err.status, err.message);
    }
    next(err);
  });
};

/**
 * @description Server error helper method.
 *
 * @param {object} router - Express router to be passed.
 *
 * @return {void} Returns nothing.
 */
export const serverError = (router) => {
  router.use((err, req, res) => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      console.log(err);
      return sendErrorMessage(
        res, 409, 'User with email or phone number already exists'
      );
    }
    console.log(err);
    return sendErrorMessage(res, 500, 'Internal server error');
  });
};
