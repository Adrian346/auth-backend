const { Router } = require('express');
const { receiveNotificacion, receiveCode } = require('../controllers/melibot');

const router = Router();

router.get('/receive-code', receiveCode);

router.post('/receive-notification', receiveNotificacion);

module.exports = router;