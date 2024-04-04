/* eslint-disable linebreak-style */


const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');

const nomeMiddleware = require('../middlewares/nomeMiddleware');

const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');

const idadeMiddleware = require('../middlewares/idadeMiddleware');


/* GET clientes*/

router.get('/', clienteController.findAll);

/* POST clientes*/

router.post('/', nomeMiddleware.validateName,

    sobrenomeMiddleware.validateFamilyName,

    idadeMiddleware.validateAge,

    clienteController.save,

);


/* PUT clientes*/

router.put('/', clienteController.update);

/* DELETE clientes*/

router.delete('/:id', clienteController.remove);


module.exports = router;


