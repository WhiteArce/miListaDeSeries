const Espera = require('../models/espera.model');
const esperaCtrl = {};

esperaCtrl.getEspera = async (req, res) => {
    const series = await Espera.find();
    res.json(series);
}


esperaCtrl.createEspera = async (req, res) => {
    const espera = new Espera(req.body);
    await Espera.save();
    console.log(req.body);
    
}

esperaCtrl.getEspera = async (req, res) => {
   const espera = await Espera.findById(req.params.id);
   res.json(Espera);
}

esperaCtrl.editEspera = async (req, res) => {
    const { id } = req.params;
    const espera = {
        nombre: req.body.nombre,
        creadorPor: req.body.creadoPor,
        elenco: req.body.elenco,
        distribuidora: req.body.distribuidora,
        genero: req.body.genero,
        clasificacion: req.body.clasificacion
    };
    await Espera.findByIdAndUpdate(id, {$set: espera}, {new: true});
}


esperaCtrl.deleteEspera = async (req, res) => {
   await Espera.findByIdAndRemove(req.params.id);
    
}

module.exports = esperaCtrl;