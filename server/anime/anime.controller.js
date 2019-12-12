const Anime = require('./anime.dao');


exports.createAnime = (req, res, next) => {

    const newAnime = {
        name: req.body.name,
        creadoPor: req.body.creadoPor,
        elenco: req.body.elenco,
        desarrolladora: req.body.desarrolladora
        // genero: req.body.genero,
        // clasificacion: req.body.clasificacion
    }

    Anime.create(newAnime, (err, anime) => {
        // if (err && err.code === 11000) {
        //     return res.status(409).send("El anime ya existe")
        // }
        // if (err) {
        //     return res.status(500).send("Error del servidor")
        // }
        const dataAnime = {
            name: anime.name,
            creadoPor: anime.creadoPor,
            elenco: anime.elenco,
            desarrolladora: anime.desarrolladora
        }
        
        res.send({ dataAnime });

    });



}