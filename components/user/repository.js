/**
 * @author - Wokoro Douye Samuel
 */

import models from '../../database/models'

const {User} = models;

class UserRepository {
  constructor(){
    this.model = User;
  }

 async create({firstname, lastname, email, isadmin, password}){
   await this.model.create({firstname, lastname, email, isadmin, password})
  }
}

export default new UserRepository();
