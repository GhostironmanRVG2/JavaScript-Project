//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');


//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from Location order by id_location desc', function (err, rows, fields) {
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
    const id_location = req.sanitize('id_location').escape();                                                                                                                                        
    connect.con.query('SELECT * from Location where id_location = ?', id_location, function (err, rows, fields) {
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

function readNif(req, res) {
    //criar e executar a query de leitura na BD
    const nif_Location = req.sanitize('nif_Location').escape();                                                                                                                                        
    connect.con.query('SELECT * from Location where nif = ?', nif_Location, function (err, rows, fields) {
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

function readAddress(req, res) {
    //criar e executar a query de leitura na BD
    const address_Location = req.sanitize('address_Location').escape();                                                                                                                                        
    connect.con.query('SELECT * from Location where address = ?', address_Location, function (err, rows, fields) {
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
    //const id_location = req.sanitize('id_location').escape();
    const designation = req.sanitize('designation').escape();
    const type = req.sanitize('type').escape();
    const address = req.sanitize('address').escape();
    const county = req.sanitize('county').escape();
    const district = req.sanitize('district').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const post_code = req.sanitize('post_code').escape();
    const email = req.sanitize('email').escape();
    const nif = req.sanitize('nif').escape();
    var query = "";
        var post = {
            //id_location: id_location,
            designation: designation,
            type: type,
            address: address,
            county: county,
            district: district,
            phone_number: phone_number,
            post_code: post_code,
            email: email,
            nif: nif
        };
        query = connect.con.query('INSERT INTO Location SET ?', post, function (err, rows, fields) {
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
    const id_location = req.sanitize('id_location').escape();
    const designation = req.sanitize('designation').escape();
    const type = req.sanitize('type').escape(); 
    const address = req.sanitize('address').escape(); 
    const county = req.sanitize('county').escape(); 
    const district = req.sanitize('district').escape(); 
    const phone_number = req.sanitize('phone_number').escape();  
    const post_code = req.sanitize('post_code').escape();  
    const email = req.sanitize('email').escape(); 
    const nif = req.sanitize('nif').escape();
    var query = "";
  

    query = connect.con.query('UPDATE Location SET designation=?,type=?,address=? ,county=?,district=?,phone_number=?, post_code=? , email=? , nif=? WHERE id_location=?',
    [designation,type,address,county,district,phone_number,post_code,email,nif,id_location],function (err, rows, fields) {
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


/*
//efetuar updade de todos os dados para um determinado iduser
function update(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_location = req.sanitize('id').escape();
    const designation = req.sanitize('designation').escape();
    const type = req.sanitize('type').escape();
    const address = req.sanitize('address').escape();
    const county = req.sanitize('county').escape();
    const district = req.sanitize('district').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const post_code = req.sanitize('post_code').escape();
    const email = req.sanitize('email').escape();
    const nif = req.sanitize('nif').escape();
    console.log("without hahsh:" + req.body.pass);
    var query = "";
    var update = {
        designation,
        type,
        address,
        county,
        district,
        phone_number,
        post_code,
        email,
        nif
    };
    query = connect.con.query('INSERT INTO Location SET designation = ?, type = ?, address = ?, county = ?, district = ?, phone_number = ?, post_code = ?, email = ?, nif = ? where id_location= ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({"msg": "update with success"});
        } else {
            res.status(400).send({"msg": err.code});
            console.log('Error while performing Query.', err);
        }
    });
}*/



//função que apaga todos os dados de um iduser
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_location = req.sanitize('id_location').escape();
    connect.con.query('DELETE from Location where id_location = ?', id_location, function (err, rows, fields) {
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

//função de leitura que retorna o resultado no callback
function readRegisted(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * from Location where type="Registada" order by id_location desc', function (err, rows, fields) {
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

function countLocationRegisted(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT COUNT(id_location) AS rows from Location where type = "Registada"', function (err, rows, fields) {
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



//exportar as funções
module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    deleteID: deleteID,
    readRegisted: readRegisted,
    countLocationRegisted: countLocationRegisted,
    readNif: readNif,
    readAddress: readAddress
};
