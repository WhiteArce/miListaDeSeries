const Finalizado = require('../models/Finalizado.model');
const finalizadoCtrl = {};

finalizadoCtrl.getFinalizado = async (req, res) => {
    const finalizado = await Finalizado.find();
    res.json(finalizado);
}


finalizadoCtrl.createFinalizado = async (req, res) => {
    const finalizado = new Finalizado(req.body);
    await Finalizado.save();
    console.log(req.body);
    
}

finalizadoCtrl.getFinalizado = async (req, res) => {
   const finalizado = await Finalizado.findById(req.params.id);
   res.json(Finalizado);
}

finalizadoCtrl.editFinalizado = async (req, res) => {
    const { id } = req.params;
    const finalizado = {
        nombre: req.body.nombre,
        creadorPor: req.body.creadoPor,
        elenco: req.body.elenco,
        distribuidora: req.body.distribuidora,
        genero: req.body.genero,
        clasificacion: req.body.clasificacion
    };
    await Finalizado.findByIdAndUpdate(id, {$set: finalizado}, {new: true});
}


finalizadoCtrl.deleteFinalizado = async (req, res) => {
   await Finalizado.findByIdAndRemove(req.params.id);
    
}

module.exports = finalizadoCtrl;