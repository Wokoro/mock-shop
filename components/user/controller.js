/**
 * @author - Wokoro Douye Samuel
 */

import repository from './repository';
import {
  sendSuccessMessage,
  sendErrorMessage,
  encryptPassword,
  decryptPassword,
  generateToken,
  filterUserInfo
} from '../../utils';

class UserController {
  constructor() {
    this.repository = repository;
  }

  async createUser({ body }, req, next) {
    try {
      const { firstname, lastname, email, isadmin, password } = body;
      const result = await this.repository.create({
        firstname, lastname, email, isadmin, password
      });
      sendSuccessMessage(res, 200, result);
    } catch {

    }
  }

  /**
   * @description - Function to sign user
   *
   * @param {object} param0 - Request body property, with signup values.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass controller to next function.
   *
   * @return {void} - Returns user info for successful signin else sends error
   */
  async signIn({ body }, res, next) {
    const { email, password: planPwd } = body;

    try {
      const user = await repository.getOne({ email });

      if (!user) {
        return sendErrorMessage(res, 404, 'User name or password incorrect');
      }

      const { dataValues } = user;
      const { password, isadmin, email: strEmail } = dataValues;
      const result = decryptPassword(planPwd, password);

      if (result) {
        const token = generateToken({ strEmail, isadmin });
        const response = filterUserInfo(dataValues);
        response.token = token;

        return sendSuccessMessage(res, 200, response);
      }

      return sendErrorMessage(res, 404, 'User name or password incorrect');
    } catch (e) {
      next(e);
    }
  }
}

export default UserController();
