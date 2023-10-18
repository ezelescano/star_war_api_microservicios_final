const { Router } = require('express');
const handlers = require('../handlers');
const router = Router();

router.get('/', handlers.getFilmsHandler);

router.post('/', handlers.createFilmHandler);

router.delete('/delete/:id', handlers.deleteFilmHandler);

router.put('/update/:id', handlers.updateFilmHandler);



module.exports = router;