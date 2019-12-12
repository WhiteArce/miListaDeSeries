const ListaAnime = require('./listaAnime.dao');


exports.getListaAnime = async (req, res) => {
   
    const listaAnimes = await ListaAnime.find({});

    const listaAnimesMap = {};
    listaAnimes.forEach((listaAnime) => {
        listaAnimesMap[listaAnime._id] = listaAnime;
    });

    res.send(listaAnimesMap);

}