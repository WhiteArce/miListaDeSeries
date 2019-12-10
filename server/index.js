const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const { mongoose } = require('./database');


//settings
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());



//Routes
app.use('/api/series', require('./routes/series.routes'));

//Start server
app.listen(app.get('port'), () => {
    console.log("servidor escuchando en el puerto: ", app.get('port'));

})
