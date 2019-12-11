const passport = require('passport');
const localStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = mongoose.model('User');


passport.use(new localStrategy({
    usernameField: 'email'
},
    function (username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            //Regresa si el usuario no fué encontrado en la base de datos
            if (!user) {
                return done(null, false, {
                    message: 'Usuario no encontrado'
                });
            }
            //Regresa si la contraseña está mal
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'La contraseña es incorrecta'
                });
            }
            //Si los datos correctos regresa el objeto usuario
            return done(null, user);
        });
    }
));