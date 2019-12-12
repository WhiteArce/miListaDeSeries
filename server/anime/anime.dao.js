const mongoose = require('mongoose');
const animeSchema = require('./anime.model');


animeSchema.statics = {
    create: function (data, cb) {
        const anime = new this(data)
         anime.save(cb);
    },
    delete: function (data, cb) {
        const anime = new this(data)
         anime.findByIdAndRemove(data.id);
    },
    edit: function (data, cb) {
        const anime = new this(data)
         anime.findByIdAndUpdate(data.id);
    }
}

const animeModel = mongoose.model('Animes', animeSchema);


module.exports = animeModel;