const mongoose = require('mongoose');


const URI = 'mongodb://localhost/series-crud';

mongoose.connect(URI)
    .then(db => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err));

module.exports = mongoose;
