const app = require('../server');
const controllerMail = require('../controllers/MailController');
app.post('/SendMail/', controllerMail.sendMail);