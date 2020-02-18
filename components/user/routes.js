/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import validations from './validation';

export default [
  {
    path: '/signup',
    method: 'post',
    handlers: [...validations, controller.createUser]
  }
];
