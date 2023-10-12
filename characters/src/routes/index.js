const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    console.log('Soy la ruta del getCharacters');
});

router.post('/', (req, res) => {
    console.log('Soy la ruta del createCharacters');
});

router.delete('/delete/:id', (req, res) => {
    console.log('Soy la ruta que borra');
});

router.put('/update/:id', (req, res) => {
    console.log('Soy la ruta que actualiza');
});