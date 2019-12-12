const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const animeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    creadoPor: {
        type: String,
        required: true,
        trim: true
    },
    elenco: {
        type: String,
        required: true,
        trim: true
    },
    desarrolladora: {
        type: String,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    clasificacion: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});


module.exports = animeSchema;