const express = require('express');
const router = express.Router();

const serie = require('./anime.controller');

router.get('/', animeCtrl.getAnimes);
router.post('/', animeCtrl.createAnime);
router.get('/:id', animeCtrl.getAnime);
router.put('/:id', animeCtrl.editAnime);
router.delete('/:id', animeCtrl.deleteAnime);

module.exports = router;