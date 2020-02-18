/**
 * @author - Wokoro Douye Samuel
 */

import { check, validationResult } from 'express-validator';
import { sendErrorMessage } from '../../utils';

export default [
  check('firstname', 'Firstname must be valid')
    .escape()
    .trim()
    .not()
    .isEmpty(),

  check('lastname', 'Lastname must be valid')
    .escape()
    .trim()
    .not()
    .isEmpty(),

  check('email', 'email must be valid')
    .escape()
    .trim()
    .isEmail(),

  check('password', 'password must be valid')
    .escape()
    .trim()
    .exists(),

  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const error = result.array().map(e => ({ [e.param]: e.msg }));
      return sendErrorMessage(res, 406, error);
    }
    return next();
  }
];
