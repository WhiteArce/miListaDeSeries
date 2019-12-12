const mongoose = require('mongoose');
const listaAnimesSchema = require('./listaAnime.model');

listaAnimesSchema.statics = {
    listaAnimes: function (query, cb) {
        this.find(query, cb);
    }
}

const listaAnimesModel = mongoose.model('listaAnimes', listaAnimesSchema);


module.exports = listaAnimesModel;