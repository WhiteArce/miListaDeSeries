const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre:{
        nombre: String,
        apellido: String,
        required:true
    },
    alias:{
        type: String,
        required: false
    },
    correo:{
        type: String,
        required: true
    },
    misSeries:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Serie',
        status: String,
        required: false
    }],
    password:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Usuario', UsuarioSchema);