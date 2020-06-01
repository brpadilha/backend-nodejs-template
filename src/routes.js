import { Router } from 'express';

import ClientController from './app/Controllers/ClientController';
import SessionController from './app/Controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import TransactionController from './app/Controllers/TransactionController';

const routes = new Router();

routes.post('/clients', ClientController.store);
routes.post('/sessions', SessionController.store);
routes.get('/clients', ClientController.index);

routes.use(authMiddleware);
routes.get('/transactions', TransactionController.index);

routes.post('/transactions', TransactionController.store);

export default routes;
