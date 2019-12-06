const mongoose = require('mongoose');
const { Schema } = mongoose;

const animeSchema = new Schema({
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
    }

});

module.exports = mongoose.model('Anime', animeSchema);