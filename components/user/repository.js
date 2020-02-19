/**
 * @author - Wokoro Douye Samuel
 */

import models from '../../database/models'

const {User} = models;

class UserRepository {
  constructor(){
    this.model = User;
  }

  /**
   * @description - Function to create user account.
   *
   * @param {string} param0 - User's first name
   *
   * @param {string} param1 - User's last name
   *
   * @param {string} param2 - User's first email address
   *
   * @param {string} param3 - User's user password
   *
   * @returns {object} - Returns a promise for user account creation.
   */
  async create({
    firstname, lastname, email, password
  }) {
    return this.model.create({
      firstname, lastname, email, password
    });
  }

  /**
   * @description - Function get one user.
   *
   * @param {object} condition - Condition to search for.
   *
   * @param {string} include - Optional associated field to include
   *
   * @returns {object} Returns a promise for user found account.
   */
  async getOne(condition = {}, include = '') {
    return this.model.findOne(
      { where: condition, include }
    );
  }
}

export default new UserRepository();
