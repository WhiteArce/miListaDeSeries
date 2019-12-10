const mongoose = require('mongoose');


const URI = 'mongodb+srv://WhiteArce:<maplerce>@listaseries-yiv00.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err));

module.exports = mongoose;
