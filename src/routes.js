const routes = require('express').Router();
const transactionController = require('./app/controllers/transactionController');
const cardController = require('./app/controllers/cardController');
const validators = require('./app/middlewares/validators');
const UserController = require('./app/controllers/UserController');
const jwtMid = require('./app/middlewares/jwt');


//Login
routes.post('/login', UserController.auth);
// routes.use(jwtMid);
//Rotas para cartoes
routes.post('/card', cardController.store);
routes.get('/card', cardController.index);
routes.get('/card/:id', cardController.show);


//Rotas para transações
routes.post('/transaction', transactionController.store);
routes.get('/transaction', transactionController.index);



//rotas de usuários
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);


module.exports = routes;
