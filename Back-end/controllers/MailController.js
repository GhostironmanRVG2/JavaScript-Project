const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const bCrypt = require('bcrypt-nodejs');
var generator = require('generate-password');
const connect = require('../config/connect');
const axios = require('axios');


const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "mail");
const got = require('got');

//const controllerUser = require('../controllers/UsersController');

function sendMail(req, res) {
  // const name = req.sanitize('name').escape();
  const email = req.sanitize('email').escape();
  const policiaStamp = "PSP - Polícia de Segurança Pública"
  var ramdomPasswd = generator.generate({
	length: 10,
	numbers: true
});

   const generateHash = function(ramdomPasswd) {
        return bCrypt.hashSync(ramdomPasswd, bCrypt.genSaltSync(8), null);
      };
    const userPassword = generateHash(ramdomPasswd);
      
    var query = "";
    query = connect.con.query('UPDATE users SET password = ? where email = ?', [userPassword, email], function (err, rows, fields) {

    });
    
/*
    (async () => {
    	const {body} = await got.put('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/UsersPassword/'+ email, {
    		json: {
    			email: email,
    			password: generateHash
    		},
    		responseType: 'json'
    	});
    
    	console.log(body.data);
    })();
*/
    req.checkBody("email", "Insira um email válido.").isEmail();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    }
    else {
        if (typeof(email) != "undefined" /*&& typeof(subject) != "undefined" && typeof(name) != "undefined"*/) {
            let bodycontent = "";
            bodycontent += 'Caro Cidadão, ' + '<br>' + '<br>';
            bodycontent += 'A nova palavra-passe da sua conta com username   ' +req.body.email+ '   é  '+ ramdomPasswd+ '<br>';
            bodycontent += 'Por questões de segurança, deverá alterar posteriormente a sua palavra-passe.'+ '<br>'+ '<br>' + '<br>';
            bodycontent += 'Agradecemos a sua preferência,' + '<br>' + '<br>' ;
            bodycontent += '</i></blockquote>';
            bodycontent += '<img src="https://i.ibb.co/YZFYJry/logo.png" alt="logo" height="42" width="150">' + '<br>';
            bodycontent += policiaStamp;
            const transporter = nodemailer.createTransport(smtpTransport({
                service: 'Gmail',
                auth: {
                    user: 'noreply.policia.psp',
                    pass: "d111policiapsp"
                }
            }));
            transporter.verify(function(error, success) {
                if (error) {
                    console.log(error);
                    res.status(jsonMessages.mail.serverError.status).send(jsonMessages.mail.serverError);
                }
                else {
                    console.log('Server is ready to take our messages');
                }
            });
            const mailOptions = {
                from: req.body.email,
                to: req.body.email,
                cc: req.body.email,
                subject: 'PSP: Redefinição de Palavra-Passe',
                html: bodycontent
            };
            
            
            var query = "";
            query = connect.con.query('SELECT email FROM users WHERE email = ?', email, function (err, rows, fields) {
                if (!err) {
                    //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
                    if (rows.length == 0) {
                        res.status(jsonMessages.mail.nonexistentData.status).send(jsonMessages.mail.nonexistentData);
                    } else {
                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                console.log(error);
                                res.status(jsonMessages.mail.mailError.status).send(jsonMessages.mail.mailError);
                            }
                            else {
                                console.log('Email sent: ' + info.response);
                                res.status(jsonMessages.mail.mailSent.status).send(jsonMessages.mail.mailSent);
                            }
                        });
                    }
                } else
                res.status(400).send({
                    "msg": err.code
                });
            });
        }
        else
        res.status(jsonMessages.mail.requiredData.status).send(jsonMessages.mail.requiredData);
    }
}


module.exports = {
    sendMail: sendMail
};

    

