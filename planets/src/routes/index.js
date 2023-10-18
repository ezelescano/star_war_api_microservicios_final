const {Router} = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/', handlers.getPlanetsHandlers);

router.post('/', handlers.createPlanetsHandler);

router.delete('/delete/:id', handlers.deletePlanetHandler);

router.put('/update/:id', handlers.updatePlanetHandler);

module.exports = router;