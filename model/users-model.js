const db = require('./util/db');

//detalii database
function create(name, pass){
    return new Promise(function(resolve, reject){
        let sql="INSERT INTO users (username, password) VALUES ?";
        let param=[[name, pass]];
        db.pool.query(sql, [param], function(err, result){
            if (err) throw err;//eroare la conexiune
            try{
                console.log('Number of records inserted: ' + result.affectedRows);
                resolve(result.affectedRows);
            }
            catch (err){
                console.log('eroare, nu pot crea userul');
                return reject(err);
            }
        });
    });
}
function allUsers() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT ID, UserName, Email, Password, Phone from users`;
        db.pool.query(sql,(error, results, fields) => {
            var result;
            if (results.length == 0) {
                console.log("nu exista");
                result = "nu exista userul";
            }
            else {
                results = JSON.parse(JSON.stringify(results));
                result = results;
            }
            console.log(result);
            return error? reject(error):resolve(result);
        });
    });
}

function findUser(userName) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * from users WHERE UserName = '${userName}'`;
        db.pool.query(sql,(error, results, fields) => {
            var result;
            if (results.length == 0) {
                console.log("nu exista");
                result = "nu exista userul";
            }
            else {
                results = JSON.parse(JSON.stringify(results));
                result = results;
            }
            console.log(result);
            return error? reject(error):resolve(result);
        });
    });
}

function insertUser() {
    var sql = "INSERT INTO users (username, email, password, phone) VALUES ('Ramo', 'ramoo@yahoo.com', 'stream993j', '0957333928')";
    db.pool.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Number of records inserted:" + result.affectedRows);
      }
    });
}

function deleteUser(name) {
    var sql = `DELETE FROM users where UserName = ?`;

    db.pool.query(sql, [name], (err, result) => {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Number of records deleted:" + result.affectedRows);
      }
    });
}

module.exports = {findUser, allUsers, deleteUser, create};