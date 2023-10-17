const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/', handlers.charactersHandlers);


router.post('/', handlers.createCharacterHandler);

router.delete('/delete/:id', (req, res) => {
    console.log('Soy la ruta que borra');
});

router.put('/update/:id', (req, res) => {
    console.log('Soy la ruta que actualiza');
});

module.exports = router;