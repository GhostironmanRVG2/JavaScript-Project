var bCrypt = require('bcrypt-nodejs');
var jsonMessages = require("../../assets/jsonMessages/login.js");
cookieParser = require('cookie-parser');



module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


//Recebe o user e passa o id para a session
  passport.serializeUser(function(user,done) {
    done(null, user.id);
  });
 // Depois da sessao ele devolve aqui o user 

  passport.deserializeUser(function(userId, done) {
    User.findById(userId).then(function(userinfo) {
      if (userinfo) {
        done(null, userinfo);
      }
      else {
        done(userinfo.errors, null);
      }
    });
  });


  passport.use('local-signupCitizen', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function(req, email, password, done) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({ where: { email: email } }).then(function(user) {
        if (user) {
          return done(null, false,"Duplicado");
        }
        else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: userPassword,
            nome: req.body.nome,
            apelido: req.body.apelido,
            tipo: "Cidadão",
          };
          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      
      var User = user;
      var isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);

      }

      User.findOne({ where: { email: email } }).then(function(user) {
        if (!user) {
          return done(null, false, jsonMessages.user.email);
        }
        if (!isValidPassword(user.password, password)) {
          return done(null, false, jsonMessages.user.password);
        }
        var userinfo = user.get();

        return done(null, userinfo);
      }).catch(function(err) {
        console.log("Error:", err);
        return done(null, false,  jsonMessages.user.error);
      });
    }
  ));

 passport.use('local-signupCitizen', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function(req, email, password, done) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({ where: { email: email } }).then(function(user) {
        if (user) {
          return done(null, false, jsonMessages.user.duplicate);
        }
        else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: userPassword,
            nome: req.body.nome,
            apelido: req.body.apelido,
            tipo: "Cidadão",
          };
          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
//LOCAL-SIGNUP OPERACIONAIS
  passport.use('local-signupOperacionais', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback

  },
  function(req, email, password, done) {
    var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    User.findOne({ where: { email: email } }).then(function(user) {
      if (user) {
        return done(null, false, jsonMessages.user.duplicate);
      }
      else {
        var userPassword = generateHash(password);
        var data = {
          email: email,
          password: userPassword,
          tipo: req.body.tipo
        };
        User.create(data).then(function(newUser, created) {
          if (!newUser) {
            return done(null, false);
          }
          if (newUser) {
            return done(null, newUser);
          }
        });
      }
    });
  }
));


//local signin Operacionais
passport.use('local-signinOperacionais', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {
  var User = user;
  var isValidPassword = function(userpass, password) {
    return bCrypt.compareSync(password, userpass);

  }
  User.findOne({ where: { email: email } }).then(function(user) {
    if (!user) {
      return done(null, false, jsonMessages.user.email);
    }
    if (!isValidPassword(user.password, password)) {
      return done(null, false, jsonMessages.user.password);
    }if(!(user.get().tipo=="Centro de Operações")){
      return done(null , false ,jsonMessages.user.NonOp);
    }
    var userinfo = user.get();

    return done(null, userinfo);
  }).catch(function(err) {
    console.log("Error:", err);
    return done(null, false,  jsonMessages.user.error);
  });
}
));


}
