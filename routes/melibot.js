const { Router } = require('express');
const { receiveNotificacion, response200 } = require('../controllers/melibot');

const router = Router();

router.get('/receive-notification', receiveNotificacion);

router.post('/response200', response200);