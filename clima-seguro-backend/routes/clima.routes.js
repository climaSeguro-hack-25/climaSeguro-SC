const express = require('express');
const router = express.Router();
const climaController = require('../controllers/climaController');

router.get('/:cidade', climaController.obterClimaPorCidade);

module.exports = router;