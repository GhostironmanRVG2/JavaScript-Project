//definição de constantes
const saltRounds = 10;
const connect = require('../config/connect');


//função de leitura que retorna o resultado no callback
function read(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT id_candidate,candidate_type ,qualifications,candidate_situation,name ,cc_number ,DATE_FORMAT(cc_validity,"%Y-%m-%d") AS cc_validity ,address ,phone_number ,naturality  ,email ,DATE_FORMAT(birth_date,"%Y-%m-%d") AS birth_date,photo,district ,county ,post_code from Candidate order by id_candidate desc', function (err, rows, fields) {
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
    const id_location = req.sanitize('id_candidate').escape();                                                                                                                                        
    connect.con.query('SELECT id_candidate,candidate_type ,qualifications,candidate_situation,name ,cc_number ,DATE_FORMAT(cc_validity,"%Y-%m-%d") AS cc_validity,address ,phone_number ,naturality  ,email ,DATE_FORMAT(birth_date,"%Y-%m-%d") AS birth_date,photo,district ,county ,post_code from Candidate where id_candidate = ?', id_location, function (err, rows, fields) {
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
    const candidate_type = req.sanitize('candidate_type').escape();
    const qualifications = req.sanitize('qualifications').escape();
    const candidate_situations = req.sanitize('candidate_situations').escape();
    const name = req.sanitize('name').escape();
    const cc_number = req.sanitize('cc_number').escape();
    const cc_validity = req.sanitize('cc_validity').escape();
    const address = req.sanitize('address').escape();
    const phone_number = req.sanitize('phone_number').escape();
    const naturality = req.sanitize('naturality').escape();
    const email = req.sanitize('email').escape();
    const birth_date = req.sanitize('birth_date').escape();
    const district = req.sanitize('district').escape();
    const county = req.sanitize('county').escape();
    const post_code = req.sanitize('post_code').escape();
    var query = "";
        var post = {
            //id_location: id_location,
            candidate_type: candidate_type,
            qualifications: qualifications,
            aandidate_situations: andidate_situations,
            name: name,
            cc_number: cc_number,
            cc_validity: cc_validity,
            address: address,
            phone_number: phone_number,
            naturality: naturality,
            email: email,
            birth_date: birth_date,
            district: district,
            county: county,
            post_code: post_code
        };
        query = connect.con.query('INSERT INTO Candidate SET ?', post, function (err, rows, fields) {
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


//função de leitura que retorna o resultado no callback
function readCandidates(req, res) {
    //criar e executar a query de leitura na BD
    connect.con.query('SELECT * FROM Candidate WHERE id_candidate NOT IN (SELECT id_candidate FROM Operational)', function (err, rows, fields) {
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
    readCandidates: readCandidates,
};
