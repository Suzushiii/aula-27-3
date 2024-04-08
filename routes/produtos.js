/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const produtoController =
    require('../controllers/produtoController');

// middlewares
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const dataAtualizadoMiddleware = require('../middlewares/data_atualizadoMiddleware');

/* GET produtos*/
router.get('/', produtoController.findAll);
/* POST produtos*/
router.post('/', nomeMiddleware.validateName, descricaoiddleware.validateDescition, precoMiddleware.validatePreco, dataAtualizadoMiddleware.validateData, produtoController.save);

/* PUT produtos*/
router.put('/', produtoController.update);
/* DELETE produtos*/
router.delete('/:id', produtoController.remove);
module.exports = router;
