const Usuario = require('../models/usuario.model');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}


usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    console.log(req.body);
    
}

usuarioCtrl.getUsuario = async (req, res) => {
   const usuario = await usuario.findById(req.params.id);
   res.json(usuario);
}

usuarioCtrl.editUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        alias: req.body.alias,
        correo: req.body.correo,
        misSeries:req.body.misSeries
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
}
usuarioCtrl.deleteUsuario = async (req, res) => {
    Usuario.findByIdAndRemove(req.params.id);
    
}

module.exports = usuarioCtrl;