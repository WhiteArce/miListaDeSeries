const jwt = require('express-jwt');
const express = require('express');
const router = express.Router();
const SECRET_KEY = "llavesecreta123";


const auth = jwt({
    secret: SECRET_KEY,
    userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

//Perfil /profile
router.get('/profile', auth, ctrlProfile.profileRead);

//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;