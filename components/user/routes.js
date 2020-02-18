/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller'

 export default [
   {
     path: '/signup',
     method: 'post',
     handlers: [controller.createUser]
   }
 ]
