/**
 * @author - Wokoro Douye Samuel
 */

import express from 'express';

import middlewares from './middlewares';
import routes from './components';
import errorHandlers from './middlewares/errors.handlers';
import { middlewareLoader, routesLoader } from './utils';
import docs from './docs';

const app = express();
const router = express.Router();

app.use('/api/v1', router);

process.on('uncaughtException', (error) => {
  console.log(error);
});
process.on('unhandledRejection', (error) => {
  console.log(error);
});

middlewareLoader(middlewares, router);
routesLoader(routes, router);
routesLoader(docs, router);
middlewareLoader(errorHandlers, router);

export default app;
