const mongoose = require('mongoose');
const dbURL = require('./properties').DB;


module.exports = () => {
    mongoose.connect(dbURL, { useNewUrlParser: true })
        .then(() => console.log("Conectado a la base de datos"))
        .catch(err => console.log(`Ha ocurrido un error ${err}`))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(`Mongo esta desconectado`);
            process.exit(0);

        });
    });
}

