const express = require('express');
const router = express.Router();

const serie = require('./serie.controller');

router.get('/', serie.getSeries);
router.post('/', serie.createSerie);
router.get('/:id', serie.getSerie);
router.put('/:id', serie.editSerie);
router.delete('/:id', serie.deleteSerie);

module.exports = router;