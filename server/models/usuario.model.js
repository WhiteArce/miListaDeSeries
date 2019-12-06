const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre:{
        nombre: String,
        apellido: String,
        required:true
    },
    correo:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Usuario', UsuarioSchema);