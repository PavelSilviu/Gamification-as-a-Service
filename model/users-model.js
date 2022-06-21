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

function insertBadge() {
    var sql = "INSERT INTO badges (nameBadge, action, start) VALUES ('eliminare', 'elimin elementul cutare', '423')";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Number of records inserted:" + result.affectedRows);
      }
    });
}

function allBadges () {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM badges`;

        db.query(sql,(error, results, fields) => {
            var result;
            if (results.length == 0) {
                console.log("nu exista");
                result = "nu exista badge-ul";
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

function insertLevels() {
    var sql = "INSERT INTO levels (NameLevel, Level1, XP) VALUES ('nivel1', '123 puncte', '12')";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Number of records inserted:" + result.affectedRows);
      }
    });
}

function allLevels () {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM levels`;

        db.query(sql,(error, results, fields) => {
            var result;
            if (results.length == 0) {
                console.log("nu exista");
                result = "nu exista level-ul";
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

module.exports = {findUser, allUsers, deleteUser, allBadges, allBadges, allLevels, create};