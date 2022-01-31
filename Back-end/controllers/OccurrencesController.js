//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');

function readDailyRegioesCountProcess(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select count(*) AS Lisboa,(Select count(*) from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d")=DATE_FORMAT(CURDATE(),"%Y-%m-%d") and (Location.district="Braga" or Location.district="Porto" or Location.district="Viana do Castelo" or Location.district="Vila Real" or Location.district="Bragança" or Location.district="Aveiro" or Location.district="Viseu" or Location.district="Guarda") ) AS Norte,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location Where Occurrence.state="Em Processo" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d")=DATE_FORMAT(CURDATE(),"%Y-%m-%d") and  (Location.district="Setubal" or Location.district="Évora" or Location.district="beja")) AS Alentejo,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d")=DATE_FORMAT(CURDATE(),"%Y-%m-%d") and Location.district="Faro") AS Algarve,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d")=DATE_FORMAT(CURDATE(),"%Y-%m-%d") and  (Location.district="Coimbra" or Location.district="Castelo Branco" or Location.district="Leiria" or Location.district="Santarém" or Location.district="Portalegre") ) AS Centro FROM Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and Location.district="Lisboa" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d")=DATE_FORMAT(CURDATE(),"%Y-%m-%d")', function (err, rows, fields) {
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


function readActiveRegioesCountProcess(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select count(*) AS Lisboa,(Select count(*) from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and (Location.district="Braga" or Location.district="Porto" or Location.district="Viana do Castelo" or Location.district="Vila Real" or Location.district="Bragança" or Location.district="Aveiro" or Location.district="Viseu" or Location.district="Guarda") ) AS Norte,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location Where Occurrence.state="Em Processo" and  (Location.district="Setubal" or Location.district="Évora" or Location.district="beja")) AS Alentejo,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and Location.district="Faro") AS Algarve,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Occurrence.state="Em Processo" and  (Location.district="Coimbra" or Location.district="Castelo Branco" or Location.district="Leiria" or Location.district="Santarém" or Location.district="Portalegre") ) AS Centro FROM Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Location.district="Lisboa" and Occurrence.state="Em Processo"', function (err, rows, fields) {
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



function readPerMounthRegioesCountProcess(req, res) {
    //criar e executar a query de leitura na BD
    const state_Occurrence = 'Em Processo';
connect.con.query('Select count(*) AS Lisboa,(Select count(*) from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m") and (Location.district="Braga" or Location.district="Porto" or Location.district="Viana do Castelo" or Location.district="Vila Real" or Location.district="Bragança" or Location.district="Aveiro" or Location.district="Viseu" or Location.district="Guarda") ) AS Norte,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location Where DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m") and  (Location.district="Setubal" or Location.district="Évora" or Location.district="beja")) AS Alentejo,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m") and Location.district="Faro") AS Algarve,(Select count(*)  from Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m") and  (Location.district="Coimbra" or Location.district="Castelo Branco" or Location.district="Leiria" or Location.district="Santarém" or Location.district="Portalegre") ) AS Centro FROM Occurrence JOIN Request on Request.id_request=Occurrence.id_request JOIN Location on Request.id_location=Location.id_location where Location.district="Lisboa" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m")', function (err, rows, fields) {
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

function readCountProcess(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('SELECT count(*) AS requestPendents, (SELECT COUNT(*) from Occurrence where Occurrence.state = "Em Processo") AS activeOccurrences, (SELECT COUNT(*) from Occurrence where Occurrence.state = "Pendente") AS pendentsOccurrences, (SELECT COUNT(*) AS rows from Occurrence where Occurrence.state = "Concluído" and DATE_FORMAT(Occurrence.arrival_date,"%Y-%m")=DATE_FORMAT(CURDATE(),"%Y-%m") ) AS solvedOccurrences from Request where Request.state="Aguardar" ', function (err, rows, fields) {
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

function readfakes(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select (count(*)*100)/(Select count(*) from Request where date_format(date,"%Y-%m")=date_format(CURDATE(),"%Y-%m") ) AS Perc  from Request WHERE Request.state="ARQUIVADO" AND date_format(date,"%Y-%m")=date_format(CURDATE(),"%Y-%m")', function (err, rows, fields) {
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

function readPorMes(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select DATE_FORMAT(arrival_date,"%Y,%m") AS MOUNTH_YEAR,count(*) AS ROWS from Occurrence group by MOUNTH_YEAR', function (err, rows, fields) {
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

function readDiarioRegioes(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select * from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request JOIN Location on Location.id_location=Request.id_location where Occurrence.arrival_date=CURDATE() order by district', function (err, rows, fields) {
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

function readDiarioResolvido(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select COUNT(*) AS rows from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request JOIN Crime_Nature on Request.id_crime_nature=Crime_Nature.id_crime_nature WHERE Occurrence.state="Concluído" ', function (err, rows, fields) {
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

function readAtivosGraves(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select COUNT(*) AS rows from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request WHERE Request.degree_of_emergency="Grave" AND Occurrence.state ="Em Processo"', function (err, rows, fields) {
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

function readAtivosModeradas(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select COUNT(*) AS rows from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request WHERE Request.degree_of_emergency="Moderada" AND Occurrence.state ="Em Processo"', function (err, rows, fields) {
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


function readAtivosMuitoGraves(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select COUNT(*) AS rows from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request WHERE Request.degree_of_emergency="Muito Grave" AND Occurrence.state="Em Processo"', function (err, rows, fields) {
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



function readDiario(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('Select COUNT (*) AS rows from Occurrence WHERE arrival_date=CURDATE()', function (err, rows, fields) {
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

function readDiariasRelatorio(req, res) {
    //criar e executar a query de leitura na BD
connect.con.query('SELECT Occurrence.id_occurrence AS id_occurrence,Location.designation AS designation_Location,Location.address AS address_Location,Location.id_location as id_location,Request.type AS type_Request,Request.state as state_Request,Crime_Nature.designation AS designation_Crime_Nature,Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Crime_Nature.id_crime_nature,Occurrence.state AS state_Occurrence,DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d") AS arrival_date_Occurrence, Occurrence.arrival_time AS arrivel_time_Occurrence, Request.id_request AS id_request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request,Request.time AS time_Request, Request.description AS description_Request, Location.type AS type_Location,Location.county AS county_Location,Location.district AS district_Location , Location.phone_number AS phone_number_Location,Location.post_code AS post_code_Location,Location.email AS email_Location,Location.nif AS nif_Location, Crime_Nature.designation AS designation_Crime_Nature from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request JOIN Location on Location.id_location=Request.id_location JOIN Crime_Nature on Crime_Nature.id_crime_nature=Request.id_crime_nature where Occurrence.arrival_date=CURDATE()', function (err, rows, fields) {
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

function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT Occurrence.id_occurrence AS id_occurrence,Location.designation AS designation_Location,Location.address AS address_Location,Location.id_location as id_location,Request.type AS type_Request,Request.state as state_Request,Crime_Nature.designation AS designation_Crime_Nature,Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Crime_Nature.id_crime_nature,Occurrence.state AS state_Occurrence,DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d") AS arrival_date_Occurrence, Occurrence.arrival_time AS arrivel_time_Occurrence, Request.id_request AS id_request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request,Request.time AS time_Request,Location.type AS type_Location,Location.county AS county_Location,Location.district AS district_Location , Location.phone_number AS phone_number_Location,Location.post_code AS post_code_Location,Location.email AS email_Location,Location.nif AS nif_Location FROM Occurrence JOIN Request ON Occurrence.id_request=Request.id_request JOIN Location ON Location.id_location=Request.id_location JOIN Crime_Nature ON Request.id_crime_nature=Crime_Nature.id_crime_nature ', function (err, rows, fields) {
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
    const id_occurrence = req.sanitize('id_occurrence').escape();                                                                                                                                        
    connect.con.query('SELECT Occurrence.id_occurrence AS id_occurrence,Location.designation AS designation_Location,Location.address AS address_Location,Location.id_location as id_location,Request.type AS type_Request,Request.state as state_Request,Crime_Nature.designation AS designation_Crime_Nature,Request.degree_of_emergency AS degree_of_emergency_Crime_Nature,Crime_Nature.id_crime_nature,Occurrence.state AS state_Occurrence,DATE_FORMAT(Occurrence.arrival_date,"%Y-%m-%d") AS arrival_date_Occurrence, Occurrence.arrival_time AS arrivel_time_Occurrence, Request.id_operations_manager AS id_operations_manager, Request.id_request AS id_request,DATE_FORMAT(Request.date,"%Y-%m-%d") AS date_Request,Request.time AS time_Request,Location.type AS type_Location,Location.county AS county_Location,Location.district AS district_Location , Location.phone_number AS phone_number_Location,Location.post_code AS post_code_Location,Location.email AS email_Location,Location.nif AS nif_Location FROM Occurrence JOIN Request ON Occurrence.id_request=Request.id_request JOIN Location ON Location.id_location=Request.id_location JOIN Crime_Nature ON Request.id_crime_nature=Crime_Nature.id_crime_nature WHERE id_occurrence = ?', id_occurrence, function (err, rows, fields) {
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
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const id_team = req.sanitize('id_team').escape();
    const id_request = req.sanitize('id_request').escape();
    const state = req.sanitize('state').escape();
    const arrival_date = req.sanitize('arrival_date').escape();   
    const arrival_time = req.sanitize('arrival_time').escape();
    var query = "";
        var post = { 
            id_occurrence: id_occurrence,
            id_team: id_team,
            id_request: id_request,
            state: state,
            arrival_date: arrival_date,
            arrival_time: arrival_time
        };
        query = connect.con.query('INSERT INTO Occurrence SET ?', post, function (err, rows, fields) {
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
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const state = req.sanitize('state').escape();

    var query = "";
    query = connect.con.query('UPDATE Occurrence SET state = ? WHERE id_occurrence = ?', [state, id_occurrence], function (err, rows, fields) {
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
    const id_occurrence = req.sanitize('id_occurrence').escape();
    connect.con.query('DELETE from Occurrence where id_occurrence = ?', id_occurrence, function (err, rows, fields) {
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


function GetRequestOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const query = connect.con.query('SELECT id_request FROM Occurrence WHERE id_occurrence =?', id_occurrence, function (err, rows, fields){
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


function ChangeRequestOccurence(req, res) {
    const id_request = req.sanitize('id_request').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    var query="";
    if (id_request != "NULL" && (id_occurrence) != "NULL" && typeof (id_request) != 'undefined' && typeof(id_occurrence) != 'undefiend') {
        query = connect.con.query('UPDATE Occurrence SET id_request=? where id_occurrence=? ',[id_request,id_occurrence], function(err, rows, fields){
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


function GetTeamOccurrence(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    const query = connect.con.query('SELECT id_team FROM Occurrence WHERE id_occurrence =?', id_occurrence, function (err, rows, fields){
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

function ChangeTeamOccurrence(req, res) {
    const id_team = req.sanitize('id_team').escape();
    const id_occurrence = req.sanitize('id_occurrence').escape();
    var query="";
    if (id_team != "NULL" && (id_occurrence) != "NULL" && typeof (id_team) != 'undefined' && typeof(id_occurrence) != 'undefiend') {
        query = connect.con.query('UPDATE Occurrence SET id_team=? where id_occurrence=? ',[id_team,id_occurrence], function(err, rows, fields){
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

//função que apaga todos os dados de um iduser
function CountOccurrencesDay(req, res) {
    //criar e executar a query de leitura na BD
    const arrival_date = req.sanitize('arrival_date').escape();
    connect.con.query('SELECT COUNT(id_occurrence) AS rows from Occurrence where arrival_date = ?', arrival_date, function (err, rows, fields) {
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

//função que apaga todos os dados de um iduser
function CountOccurrencesActive(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT COUNT(id_occurrence) AS rows from Occurrence where state = "Em Processo"', function (err, rows, fields) {
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



//função que apaga todos os dados de um iduser
function CountOccurrencesHold(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT COUNT(id_occurrence) from Occurrence where state = "Aguardar"', function (err, rows, fields) {
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



//função que apaga todos os dados de um iduser
function PercOccurrencesCompleted(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT count(*) * 100.0 / (select count(*) from Occurrence) AS perc from Occurrence where state = "Concluído" ', function (err, rows, fields) {
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


//função que apaga todos os dados de um iduser
function PercAtivasGraves(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT count(*) * 100.0 / (select count(*) from Occurrence) AS perc from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request WHERE Request.degree_of_emergency= "Grave" AND Occurrence.state = "Em Processo" ', function (err, perc, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (perc.length == 0) {
                res.status(404).send("Data not found");
            } else {
            res.status(200).send(perc);
        }
    } else
    console.log('Error while performing Query.', err);
    });
}


//função que apaga todos os dados de um iduser
function PercAtivasMuitoGraves(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT count(*) * 100.0 / (select count(*) from Occurrence) AS perc from Occurrence JOIN Request on Occurrence.id_request=Request.id_Request WHERE Request.degree_of_emergency="Muito Grave" AND Occurrence.state = "Em Processo" ', function (err, perc, fields) {
        if (!err) {
            //verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário envia os resultados (rows).
            if (perc.length == 0) {
                res.status(404).send("Data not found");
            } else {
            res.status(200).send(perc);
        }
    } else
    console.log('Error while performing Query.', err);
    });
}


//função que apaga todos os dados de um iduser
function CountActiveOccurrences(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT COUNT(id_occurrence) AS rows from Occurrence where state = "Em Processo"', function (err, rows, fields) {
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


//função que apaga todos os dados de um iduser
function CountCompletedOccurrences(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT count(*) as rows FROM Occurrencer WHERE state = "Concluído" WHERE year(date) = YEAR(DATEADD(MONTH,-1,CURDATE())) AND month(date) = MONTH(DATEADD(MONTH,-1,CURDATE()))', function (err, rows, fields) {
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
    GetRequestOccurrence: GetRequestOccurrence,
    ChangeRequestOccurence: ChangeRequestOccurence,
    GetTeamOccurrence: GetTeamOccurrence,
    ChangeTeamOccurrence: ChangeTeamOccurrence,
    CountOccurrencesActive: CountOccurrencesActive,
    CountOccurrencesHold: CountOccurrencesHold,
    PercOccurrencesCompleted: PercOccurrencesCompleted,
    readDiario:readDiario,
    readDiarioResolvido:readDiarioResolvido,
    readDiarioRegioes:readDiarioRegioes,
    readPorMes:readPorMes,
    readfakes:readfakes,
    readDailyRegioesCountProcess: readDailyRegioesCountProcess,
    readPerMounthRegioesCountProcess: readPerMounthRegioesCountProcess,
    readAtivosGraves: readAtivosGraves,
    readAtivosMuitoGraves: readAtivosMuitoGraves,
    PercAtivasGraves: PercAtivasGraves,
    PercAtivasMuitoGraves: PercAtivasMuitoGraves,
    readAtivosModeradas: readAtivosModeradas,
    CountActiveOccurrences: CountActiveOccurrences,
    CountCompletedOccurrences: CountCompletedOccurrences,
    readDiariasRelatorio: readDiariasRelatorio,
    readActiveRegioesCountProcess: readActiveRegioesCountProcess,
    readCountProcess: readCountProcess
};
