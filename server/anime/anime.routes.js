const Animes = require('./anime.controller');

module.exports = (router) => {
    router.post('/agregarAnime', Animes.createAnime);
}