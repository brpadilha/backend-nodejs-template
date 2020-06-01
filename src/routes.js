import { Router } from 'express';

import UserController from './app/Controllers/UserController';
import SessionController from './app/Controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/clients', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/clients', UserController.index);
routes.get('/clientsFilter', UserController.filter);

routes.use(authMiddleware);

export default routes;
