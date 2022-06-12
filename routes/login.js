const express = require('express');
const controller = require('../controllers/login.controller');
const middlewares = require('../middlewares');
const routes = express.Router();

routes.post('/', middlewares.verifyBodyLogin, controller.login);

module.exports = routes;