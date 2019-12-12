const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

module.exports.register = function (req, res) {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);
    
    user.save(function (err) {
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};

module.exports.login = function (req, res) {
    passport.authenticate('local', function (err, user, info) {
        let token;

        //Si passport suelta o cacha un error
        if (err) {
            res.status(404).json(err);
            return;
        }

        //Si el usuario es encontrado
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            //Si el usuario no es encontrado
            res.status(401).json(info);
        }
    })(req, res);
};
