/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller'

export default [
  {
    path: '/signup',
    method: 'post',
    handlers: [...validations, controller.createUser]
  },
  {
    path: '/signin',
    method: 'post',
    handlers: [controller.signIn]
  }
];
