/**
 * @author - Wokoro Douye Samuel
 */

/* eslint-disable class-methods-use-this */

import repository from './repository';
import {
  sendSuccessMessage, sendErrorMessage, encryptPassword, filterUserInfo
} from '../../utils';

/**
 * @class
 */
class UserController {
  /**
   * @description - Function to create new user
   *
   * @param {object} param0 - Request body property, with signup values.
   *
   * @param {*} res - Express response object.
   *
   * @param {*} next - Function to pass controller to next function.
   *
   * @return {void} - No return value
   */
  async createUser({ body }, res, next) {
    const { email, password } = body;

    body.password = encryptPassword(password);

    const user = await repository.getOne({ email });
    if (user) {
      return sendErrorMessage(res, 409, 'User already exists');
    }

    try {
      const dbUser = await repository.create(body);
      const result = filterUserInfo(dbUser);
      sendSuccessMessage(res, 200, result);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
