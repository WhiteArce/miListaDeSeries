const Serie = require('../models/serie.model');
const serieCtrl = {};

serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find();
    res.json(series);
}


serieCtrl.createSerie = async (req, res) => {
    const serie = new Serie(req.body);
    await serie.save();
    console.log(req.body);
    
}

serieCtrl.getSerie = async (req, res) => {
   const serie = await serie.findById(req.params.id);
   res.json(serie);
}

serieCtrl.editSerie = async (req, res) => {
    const { id } = req.params;
    const serie = {
        nombre: req.body.nombre,
        creadorPor: req.body.creadoPor,
        elenco: req.body.elenco,
        distribuidora: req.body.distribuidora,
        genero: req.body.genero,
        clasificacion: req.body.clasificacion
    };
    await Serie.findByIdAndUpdate(id, {$set: serie}, {new: true});
}
serieCtrl.deleteSerie = async (req, res) => {
   await Serie.findByIdAndRemove(req.params.id);
    
}

module.exports = serieCtrl;