const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(cors({
  exposedHeaders: ['Location'],
}));


//carregar bibliotecas globais
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');


//iniciar a aplicação
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(expressValidator());


/*
//allowed domains
const permittedLinker = ['localhost', '127.0.0.1', 'http://eventos.esmad.ipp.pt/webconference', 'http://eventos.esmad.ipp.pt/', process.env.IP]; // who can link here?
app.use(function(req, res, next) {
  let i = 0,
    notFound = 1,
    referer = req.get('Referer');
  if ((req.path === '/') || (req.path === '')) {
    res.send('{"message" : "Unauthorized access", "desc": "Your domain is not registered"}');
  } 
  if (referer) {
    while ((i < permittedLinker.length) && notFound) {
      notFound = (referer.indexOf(permittedLinker[i]) === -1);
      i++;
    }
  }
  if (notFound) {
    console.log("notfound");
    res.send('{"message" : "Unauthorized access", "desc": "Your domain is not registered"}');
  }
  else {
    next(); // access is permitted, go to the next step in the ordinary routing
  }
});
*/
app.listen(port, function(err) {
  if (!err) {
    console.log('Your app is listening on ' + host + ' and port ' + port);
  }
  else {
    console.log(err);
  }
});

module.exports = app;
require('./routes/LocationsRoute');
require('./routes/CrimesNatureRoute');
require('./routes/UsersRoute');
require('./routes/DenouncersRoute');
require('./routes/RequestsRoute');
require('./routes/OccurrencesRoute');
require('./routes/OperationalsRoute');
require('./routes/CandidatesRoute');
require('./routes/MaterialsRoute');
require('./routes/OccurrencesMaterialsRoute');
require('./routes/auth.route.js');
require('./routes/MailRoute.js');
require('./loader.js');
