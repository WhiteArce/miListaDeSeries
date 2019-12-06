const Anime = require('../models/anime.model');
const animeCtrl = {};

animeCtrl.getAnimes = async (req, res) => {
    const anime = await Anime.find();
    res.json(anime);
}


animeCtrl.createAnime = async (req, res) => {
    const anime = new Anime(req.body);
    await Anime.save();
    console.log(req.body);
    
}

animeCtrl.getAnime = async (req, res) => {
   const anime = await Anime.findById(req.params.id);
   res.json(anime);
}

animeCtrl.editAnime = async (req, res) => {
    const { id } = req.params;
    const anime = {
        nombre: req.body.nombre,
        creadorPor: req.body.creadoPor,
        elenco: req.body.elenco,
        distribuidora: req.body.distribuidora,
        genero: req.body.genero,
        clasificacion: req.body.clasificacion
    };
    await Anime.findByIdAndUpdate(id, {$set: anime}, {new: true});
}


animeCtrl.deleteAnime = async (req, res) => {
   await Anime.findByIdAndRemove(req.params.id);   
}

module.exports = animeCtrl;