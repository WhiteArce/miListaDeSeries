const Animes = require('./listaAnime.controller');

module.exports = (router) => {
    router.get('/obtener-animes', Animes.getListaAnime);

}