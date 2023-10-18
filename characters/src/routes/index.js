const { Router } = require('express');
const handlers = require('../handlers');
const router = Router();

router.get('/', handlers.charactersHandlers);


router.post('/', handlers.createCharacterHandler);

router.delete('/delete/:id', handlers.deleteCharacterHandler);

router.put('/update/:id', handlers.updateCharacterHandler);

module.exports = router;