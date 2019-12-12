const Animes = require('./anime.controller');

module.exports = (router) => {
    router.post('/agregar-anime', Animes.createAnime);
}