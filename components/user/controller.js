/**
 * @author - Wokoro Douye Samuel
 */

import repository from './repository';
import { sendSuccessMessage } from '../../utils'

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
}

export default UserController();
