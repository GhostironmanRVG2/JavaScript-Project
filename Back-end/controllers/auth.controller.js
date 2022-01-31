const { response } = require("express");
const { Session } = require("express-session");
const { session } = require("passport");
const got= require("got");
const connect = require('../config/connect');
const { sanitize } = require('express-validator/filter');
const jsonMessages= require('../assets/jsonMessages/login')
var exports = module.exports = {};
const request = require('request');
exports.signup = function(req, res) {
    res.status(jsonMessages.user.duplicate.status).send(jsonMessages.user.duplicate);
    
    
};

exports.signupOP = function(req, res) {
    res.status(jsonMessages.user.duplicateOP.status).send(jsonMessages.user.duplicateOP);
    
    
};
exports.signupSuccess = function(req, res) {
    res.status(jsonMessages.user.signupSuccess.status).send(jsonMessages.user.signupSuccess);
    
 
};

exports.signupSuccessOP = function(req, res) {
    res.status(jsonMessages.user.signupSuccessOP.status).send(jsonMessages.user.signupSuccessOP);
    
 
};
exports.signin = function(req, res) {
    res.status(jsonMessages.user.invalid.status).send(jsonMessages.user.invalid);
};

exports.signinOP = function(req, res) {
    res.status(jsonMessages.user.invalidOP.status).send(jsonMessages.user.invalidOP);
};

exports.signupSuccess = function(req, res,next) {
    const id_user=global.sessData.passport.user;
connect.con.query('SELECT nome,apelido from users where id=?',id_user, function (err, rows, fields) {
    if (!err) {
        //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
        if (rows.length == 0) {
            res.status(404).send({
                "msg": "data not found"
            });
        } else {
            //MSG QUE VAI DAR
            var msgFinal={  signupSuccess: {
                msg: "Signup Success",
                message: {
                    eng: "Signup with sucess",
                    pt: "Registo efetuado com sucesso"
                },
                status: 200,url2: "/_static/grup1/Front-end/frontoffice/LoginCitizen.html",
                success: true
            }
            }
            res.send(msgFinal);
            request.post('http://127.0.0.1:8080/Denouncers/passport', {form:{id_user:id_user,name:rows[0].nome+" "+rows[0].apelido}});
            res.end();
        }
    } else
    res.status(400).send({
        "msg": err.code
    });

});
 


};

exports.signinSuccessOP = function(req, res,next) {
        //criar e executar a query de leitura na BD
        const id_user = global.sessData.passport.user;                                                                                                                                        
        connect.con.query('SELECT * from Operational JOIN Candidate  on Operational.id_candidate=Candidate.id_candidate where id_user=?',id_user, function (err, rows, fields) {
            if (!err) {
                //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
                if (rows.length == 0) {
                    res.status(404).send({
                        "msg": "data not found"
                    });
                } else {
                    
                    var msgFinal={ MSG: rows[0],
                        msg: "Success",
                        message: {
                            eng: "Login with sucess",
                            pt: "Login com sucesso"
                        },
                        status: 200, url2: "/_static/grup1/Front-end/backoffice/index.html",
                        success: true
                    }
                    
                    res.send(msgFinal);
     
                }
            } else
            res.status(400).send({
                "msg": err.code
            });

        });
     

};
exports.logout = function(req, res, err) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.status(jsonMessages.user.logoutError.status).send(jsonMessages.user.logoutError);
        }
        res.status(jsonMessages.user.logoutSuccess.status).send(jsonMessages.user.logoutSuccess);
    });
};
//session: Session { cookie: [Object] }