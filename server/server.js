const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const passport = require('passport');
const coockeParser = require('cookie-parser');
const authRoutes = require('./auth/auth.routes');
const properties = require('./config/properties');
const DB = require('./config/db');


DB();
const app = express();
const router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api', router);

authRoutes(router);

//Routes
app.use('/api/series', require('./routes/series.routes'));

router.get('/', (req, res) => {
    res.send('Mensaje desde el HOME');
});

app.use(router);
//Iniciar servidor
app.listen(properties.PORT, () => console.log(`Servidor en el puerto ${properties.PORT}`));


