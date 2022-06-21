let Database=require('./Database.js');
class User{
    static index=1;
    create(index, name, pass){
            
            return new Promise(function(resolve, reject){
                let sql="INSERT INTO users (user_id, username, password) VALUES ?";
                let param=[[index, name, pass]];
                Database.getConnection().query(sql, [param], function(err, result){
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
    findByName(name){
            return new Promise(function(resolve, reject){
                let sql="select user_id from users where username=?";
                let param=[[name]];
                Database.getConnection().query(sql, param, function(err, result){
                    if (err) throw err;//eroare la conexiune
                    try{
                        let queryResult=result[0].user_id;
                        console.log('s-a gasit userul cu id-ul: '+queryResult);
                        resolve(queryResult);
                    }
                    catch (err){
                        console.log('eroare, user not found');
                        return reject(err);
                    }
                });
            });
    }

    findPassById(id){
            let sql="select password from users where user_id=?";
            let param=[[id]];
            Database.getConnection().query(sql, param, function(err, result){
                if (err) throw err;//eroare la conexiune
                try{
                    let queryResult=result[0].password;
                    console.log('user-ul cu id-ul: '+id+' are parola: '+queryResult);
                    return "'"+queryResult+"'";
                }
                catch (err){
                    console.log('eroare, user not found');
                    return "0";
                }
            });
    }
}
module.exports=User;
//new user().create(4,'sad','23');
// let id= new User().findByName('John');
// let pass=new User().findPassById(2);
// Database.closeConnection();