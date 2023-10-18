const {Router} = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/', handlers.getPlanetsHandlers);



module.exports = router;