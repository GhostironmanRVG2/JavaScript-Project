//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');

function countNonOccurrences(req, res) { 
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT count(*) AS rows from Request where state="Aguardar" ', 
    function (err, rows, fields) {
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

function readNonOccurrences(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT Request.id_request AS id_request, Request.id_operations_manager AS id_operations_manager, Request.date AS date_Request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request, Request.time AS time_Request, Request.state AS state_Request, Request.description AS description_request, Request.type AS type_Request, Denouncer.id_denouncer AS id_denouncer, Denouncer.id_denouncer AS id_denouncer, Denouncer.name AS name_Denouncer, Denouncer.gender AS gender_Denouncer, Crime_Nature.id_crime_nature AS id_crime_nature, Crime_Nature.designation AS designation_Crime_Nature, Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Location.id_location AS id_location, Location.designation AS designation_Location, Location.address AS address_Location, Location.county AS county_Location, Location.district AS district_Location , Location.phone_number AS phone_number_Location, Location.post_code AS post_code_Location, Location.email AS email_Location, Location.nif AS nif_Location FROM Request JOIN Denouncer ON Request.id_denouncer=Denouncer.id_denouncer JOIN Crime_Nature ON Request.id_crime_nature=Crime_Nature.id_crime_nature JOIN Location ON Request.id_location=Location.id_location where state="Aguardar" or state="Arquivado"', 
    function (err, rows, fields) {
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


//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT Request.id_request AS id_request, Request.id_operations_manager AS id_operations_manager, Request.date AS date_Request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request, Request.time AS time_Request, Request.state AS state_Request,  Request.description AS description_Request, Request.type AS type_Request, Denouncer.id_denouncer AS id_denouncer, Denouncer.id_denouncer AS id_denouncer, Denouncer.name AS name_Denouncer, Denouncer.gender AS gender_Denouncer, Denouncer.cc_number AS cc_Denouncer, Denouncer.phone_number AS phone_number_Denouncer, Crime_Nature.id_crime_nature AS id_crime_nature, Crime_Nature.designation AS designation_Crime_Nature, Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Location.id_location AS id_location, Location.designation AS designation_Location, Location.address AS address_Location, Location.county AS county_Location, Location.district AS district_Location , Location.phone_number AS phone_number_Location, Location.post_code AS post_code_Location, Location.email AS email_Location, Location.nif AS nif_Location FROM Request JOIN Denouncer ON Request.id_denouncer=Denouncer.id_denouncer JOIN Crime_Nature ON Request.id_crime_nature=Crime_Nature.id_crime_nature JOIN Location ON Request.id_location=Location.id_location', 
    function (err, rows, fields) {
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
function readIdUser(req, res) {
    var query="";
    //criar e executar a query de leitura na BD
    const id_user = req.sanitize('id_user').escape();                                                                                                                                        
    query = connect.con.query('SELECT Request.id_request, Request.id_operations_manager AS id_operations_manager, Request.date AS date_Request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request,Request.time AS time_Request,Request.state AS state_Request,Request.type AS type_Request,Denouncer.id_denouncer,  Request.description AS description_Request, Denouncer.name AS name_Denouncer,Denouncer.address AS address_Denouncer,Denouncer.gender AS gender_Denouncer,Denouncer.cc_number AS cc_number_Denouncer,Denouncer.cc_validity AS cc_validity_Denouncer,DATE_FORMAT(Denouncer.cc_validity, "%Y-%m-%d") AS cc_validity_Denouncer,Denouncer.naturality AS naturality_Denouncer,Denouncer.phone_number AS phone_number_Denouncer,Denouncer.birth_date AS birth_date_Denouncer, DATE_FORMAT(Denouncer.birth_date,"%Y-%m-%d") AS birth_date_Denouncer,Denouncer.id_user AS id_user_Denouncer,Denouncer.district AS distric_Denouncer,Denouncer.county AS county_Denouncer,Denouncer.post_code AS post_code_Denouncer,Location.id_location,Location.type AS type_Location,Location.designation AS designation_Location,Location.address AS address_Location,Location.county AS county_Location,Location.district AS district_Location,Location.phone_number AS phone_number_Location,Location.post_code AS post_code_Location,Location.email AS email_Location,Location.nif AS nif_Location,Crime_Nature.designation AS designation_Crime_Nature,Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Crime_Nature.id_crime_nature AS id_crime_nature FROM Request JOIN Denouncer ON Request.id_denouncer=Denouncer.id_denouncer JOIN Location ON Request.id_location=Location.id_location JOIN Crime_Nature ON Crime_Nature.id_crime_nature=Request.id_crime_nature WHERE Denouncer.id_user=?',id_user, function (err, rows, fields) {
        console.log(query.sql);
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

//função de leitura que retorna o resultado de um iduser
function readID(req, res) {
    var query="";
    //criar e executar a query de leitura na BD
    const id_request = req.sanitize('id_request').escape();                                                                                                                                        
    query = connect.con.query('SELECT Request.id_request, Request.id_operations_manager AS id_operations_manager, Request.date AS date_Request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request,Request.time AS time_Request,Request.state AS state_Request,Request.type AS type_Request,Denouncer.id_denouncer,  Request.description AS description_Request, Denouncer.name AS name_Denouncer,Denouncer.address AS address_Denouncer,Denouncer.gender AS gender_Denouncer,Denouncer.cc_number AS cc_number_Denouncer,Denouncer.cc_validity AS cc_validity_Denouncer,DATE_FORMAT(Denouncer.cc_validity, "%Y-%m-%d") AS cc_validity_Denouncer,Denouncer.naturality AS naturality_Denouncer,Denouncer.phone_number AS phone_number_Denouncer,Denouncer.birth_date AS birth_date_Denouncer, DATE_FORMAT(Denouncer.birth_date,"%Y-%m-%d") AS birth_date_Denouncer,Denouncer.id_user AS id_user_Denouncer,Denouncer.district AS distric_Denouncer,Denouncer.county AS county_Denouncer,Denouncer.post_code AS post_code_Denouncer,Location.id_location,Location.type AS type_Location,Location.designation AS designation_Location,Location.address AS address_Location,Location.county AS county_Location,Location.district AS district_Location,Location.phone_number AS phone_number_Location,Location.post_code AS post_code_Location,Location.email AS email_Location,Location.nif AS nif_Location,Crime_Nature.designation AS designation_Crime_Nature,Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Crime_Nature.id_crime_nature AS id_crime_nature FROM Request JOIN Denouncer ON Request.id_denouncer=Denouncer.id_denouncer JOIN Location ON Request.id_location=Location.id_location JOIN Crime_Nature ON Crime_Nature.id_crime_nature=Request.id_crime_nature WHERE id_request=?',id_request, function (err, rows, fields) {
        console.log(query.sql);
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
    //receber os dados do formulário que são enviados por post
    const id_crime_nature = req.sanitize('id_crime_nature').escape();
    const id_location = req.sanitize('id_location').escape();
    const id_denouncer = req.sanitize('id_denouncer').escape();
    const degree_of_emergency = req.sanitize('degree_of_emergency_Request').escape();
    const description = req.sanitize('description_Request').escape();
    const date = req.sanitize('date_Request').escape();
    const type = req.sanitize('type_Request').escape();
    const state = req.sanitize('state_Request').escape();
    const time = req.sanitize('time_Request').escape();
    
    var query = "";
        query = connect.con.query('INSERT INTO Request SET Request.id_crime_nature=?, Request.id_denouncer=?, Request.degree_of_emergency=?, Request.description=?, Request.id_location =?, Request.date=?, Request.type=?, Request.state=?, Request.time=?', [ id_crime_nature, id_denouncer, degree_of_emergency, description, id_location, date, type, state, time ], function (err, rows, fields) {
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
    const id_request = req.sanitize('id_request').escape();
    const id_crime_nature = req.sanitize('id_crime_nature').escape();
    const id_operations_manager = req.sanitize('id_operations_manager').escape();
    const state = req.sanitize('state').escape();
    const type = req.sanitize('type').escape(); 
    const designation = req.sanitize('designation').escape();
    const degree_of_emergency = req.sanitize('degree_of_emergency').escape();
    const description = req.sanitize('description_Request').escape();
    
    var query = "";
    query = connect.con.query('UPDATE Request, Crime_Nature SET Request.state = ?, Request.type = ?, Request.id_crime_nature= ?, Request.id_operations_manager = ?, Request.description = ? , Request.degree_of_emergency = ?  WHERE Request.id_request =?', [state, type, id_crime_nature, id_operations_manager, description, degree_of_emergency,  id_request],  function (err, rows, fields) {
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


//efetuar updade de todos os dados para um determinado iduser
function updateState(req, res) {
    //receber os dados do formuário que são enviados por post
    const id_request = req.sanitize('id_request').escape();
    const state = req.sanitize('state').escape();
    var query = "";
    query = connect.con.query('UPDATE Request SET Request.state = ? WHERE id_request =?', [state, id_request],  function (err, rows, fields) {
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
    const id_request = req.sanitize('id_request').escape();
    connect.con.query('DELETE from Request where id_request = ?', id_request, function (err, rows, fields) {
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


function getLocationRequest(req, res) {
    const id_request = req.sanitize('id_request').escape();
    const query = connect.con.query('SELECT id_location FROM Request WHERE id_request =?', id_request, function (err, rows, fields){
        console.log(query.sql);
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

function changeLocationRequest(req, res) {
    const id_location = req.sanitize('id_location').escape();
    const id_request = req.sanitize('id_request').escape();
    var query="";
    if (id_location != "NULL" && (id_request) != "NULL" && typeof (id_location) != 'undefined' && typeof(id_request) != 'undefiend') {
        query = connect.con.query('UPDATE Request SET id_location=? where id_request=? ',[id_location,id_request], function(err, rows, fields){
            console.log(query.sql);
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
}


function getDenouncerRequest(req, res) {
    const id_request = req.sanitize('id_request').escape();
    const query = connect.con.query('SELECT id_denouncer FROM Request WHERE id_request =?', id_request, function (err, rows, fields){
        console.log(query.sql);
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

function changeDenouncerRequest(req, res) {
    const id_denouncer = req.sanitize('id_denouncer').escape();
    const id_request = req.sanitize('id_request').escape();
    var query="";
    if (id_denouncer != "NULL" && (id_request) != "NULL" && typeof (id_denouncer) != 'undefined' && typeof(id_request) != 'undefiend') {
        query = connect.con.query('UPDATE Request SET id_denouncer=? where id_request=? ',[id_denouncer,id_request], function(err, rows, fields){
            console.log(query.sql);
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
}



function getCrimeNatureRequest(req, res) {
    const id_request = req.sanitize('id_request').escape();
    const query = connect.con.query('SELECT id_crime_nature FROM Request WHERE id_request =?', id_request, function (err, rows, fields){
        console.log(query.sql);
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

function changeCrimeNatureRequest(req, res) {
    const id_crime_nature = req.sanitize('id_crime_nature').escape();
    const id_request = req.sanitize('id_request').escape();
    var query="";
    if (id_crime_nature != "NULL" && (id_request) != "NULL" && typeof (id_crime_nature) != 'undefined' && typeof(id_request) != 'undefiend') {
        query = connect.con.query('UPDATE Request SET id_crime_nature=? where id_request=? ',[id_crime_nature,id_request], function(err, rows, fields){
            console.log(query.sql);
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
}


//exportar as funções
module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    deleteID: deleteID,
    getLocationRequest: getLocationRequest,
    changeLocationRequest: changeLocationRequest,
    getDenouncerRequest: getDenouncerRequest,
    changeDenouncerRequest: changeDenouncerRequest,
    getCrimeNatureRequest: getCrimeNatureRequest,
    changeCrimeNatureRequest: changeCrimeNatureRequest,
    countNonOccurrences: countNonOccurrences,
    readNonOccurrences: readNonOccurrences,
    updateState: updateState,
    readIdUser: readIdUser
};
