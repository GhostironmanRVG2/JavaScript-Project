//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');


//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from User_old order by id_user desc', function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            } else {
            res.status(200).send(rows);
        }
    } else
    console.log('Error while performing Query.', err);
    });
}

//função de leitura que retorna o resultado de um iduser
function readID(req, res) {
    //criar e executar a query de leitura na BD
    const id_user = req.sanitize('id_user').escape();                                                                                                                                        
    connect.con.query('SELECT * from User_old where id_user = ?', id_user, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
        res.status(400).send({
            "msg": err.code
        });
    });
}


//função de gravação que recebe os 3 parâmetros
function save(req, res) {
    //receber os dados do formuário que são enviados por post
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const login_type = req.sanitize('login_type').escape();
    var query = "";
        var post = {
            email: email,
            password: password,
            login_type: login_type
        };
        query = connect.con.query('INSERT INTO User_old SET ?', post, function (err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({"msg": err.code});
                console.log('Error while performing Query.', err);
            } else res.status(400).send({"msg": err.code});
        }
    });
}






//efetuar updade de todos os dados para um determinado iduser
function update(req, res) {
    //receber os dados do formuário que são enviados por post
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    const login_type = req.sanitize('login_type').escape();
    console.log("without hahsh:" + req.body.pass);
    var query = "";
    var update = {
        email,
        password,
        login_type
    };
    query = connect.con.query('UPDATE User_old SET email = ?, password = ?, login_type = ? where id_user= ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({"msg": "update with success"});
        } else {
            res.status(400).send({"msg": err.code});
            console.log('Error while performing Query.', err);
        }
    });
}


function updatePassword(req, res) {
    //receber os dados do formuário que são enviados por post
    const email = req.sanitize('email').escape();
    const password = req.sanitize('password').escape();
    console.log("without hahsh:" + req.body.pass);
    var query = "";
    query = connect.con.query('UPDATE users SET password = ? where email = ?', [password, email], function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({"msg": "update with success"});
        } else {
            res.status(400).send({"msg": err.code});
            console.log('Error while performing Query.', err);
        }
    });
}

function updateStatus(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_user = req.sanitize('id_user').escape();
    const status_Users = req.sanitize('status_Users').escape();
    console.log("without hahsh:" + req.body.pass);
    var query = "";
    query = connect.con.query('UPDATE User_old SET status = ? where id_user= ?', [status_Users, id_user], function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({"msg": "update with success"});
        } else {
            res.status(400).send({"msg": err.code});
            console.log('Error while performing Query.', err);
        }
    });
}


//função que apaga todos os dados de um iduser
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_user = req.sanitize('id_user').escape();
    connect.con.query('DELETE from User_old where id_user = ?', id_user, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send({
                    "msg": "success"
                });
            }
        } else
        console.log('Error while performing Query.', err);
    });
}


//função de leitura que retorna o resultado de um iduser
function readEmail(req, res) {
    //criar e executar a query de leitura na BD
    const email = req.sanitize('email').escape();                                                                                                                                        
    connect.con.query('SELECT id from users where email = ?', email, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
        res.status(400).send({
            "msg": err.code
        });
    });
}
function readUnregisted(req, res) {
    //criar e executar a query de leitura na BD   
    const type = "unregisted";
    connect.con.query('SELECT id from users where tipo = ?', type, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
        res.status(400).send({
            "msg": err.code
        });
    });
}

function readAnonymous(req, res) {
    //criar e executar a query de leitura na BD   
    const type = "anonimo";
    connect.con.query('SELECT id_user from User_old where login_type = ?', type, function (err, rows, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            } else {
                res.status(200).send(rows);
            }
        } else
        res.status(400).send({
            "msg": err.code
        });
    });
}

//exportar as funções
module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    deleteID: deleteID,
    readEmail: readEmail,
    readUnregisted: readUnregisted,
    readAnonymous: readAnonymous,
    updateStatus: updateStatus,
    updatePassword: updatePassword
};
