const {Router} = require('express');
const store = require('../database');
const { validationModel} = require('../middleware')
const router = Router();


router.get('/:model', validationModel, async (req, res)=> {
    const {model} = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});



 module.exports= router;