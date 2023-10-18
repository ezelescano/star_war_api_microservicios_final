const { Router } = require('express');
const handlers = require('../handlers');
const router = Router();

router.get('/', handlers.getFilmsHandler);

router.post('/', handlers.createFilmHandler);

module.exports = router;