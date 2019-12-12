const mongoose = require('mongoose');
const animeSchema = require('.anime.model/');


animeSchema.statics = {
    create: function async (data, cb) {
        const anime = new this(data)
        await anime.save(cb);
    },
    delete: function async (data, cb) {
        const anime = new this(data)
        await anime.findByIdAndRemove(data.id);
    },
    edit: function async (data, cb) {
        const anime = new this(data)
        await anime.findByIdAndUpdate(data.id);
    }
}

const animeModel = mongoose.model('Animes', animeSchema);


module.exports = animeModel;