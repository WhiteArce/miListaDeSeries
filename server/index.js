const express = require('express');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');
//kiubo
//settings
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/series', require('./routes/series.routes'));

//Start server
app.listen(app.get('port'), () => {
    console.log("servidor escuchando en el puerto: ", app.get('port'));
    
})
