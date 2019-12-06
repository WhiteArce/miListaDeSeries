const mongoose = require('mongoose');
const { Schema } = mongoose;

const SeriesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    creadoPor: {
        type: String,
        required: true
    },
    elenco: {
        type: String,
        required: true
    },
    distribuidora: {
        type: String,
        required: true
        
    },
    genero: {
        type: String,
        required: true
    },

    clasificacion: {
        type: String,
        required: true
    },

    temporadas: {
        type: Number,
        required: true,
        default: 1
    },

    capitulos: {
        type: Number,
        required: true
    },
    imagen: {
        //Direccion de imagen
        type: String,
        required: true
    }

});
module.exports = mongoose.model('Serie', SeriesSchema);
