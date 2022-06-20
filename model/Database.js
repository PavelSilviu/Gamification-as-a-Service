const { timeStamp } = require("console");
const mysql = require("mysql");

class Database{
  //data members
  connection=null;
  
  //methods
  static createConnection(){
    this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "users"
    });
  }

  static getConnection(){
    if(this.connection!=null)
      return this.connection;
    else{
      this.createConnection();
      return this.connection;
    }
  }

  static closeConnection(){
    if(this.connection!=null)
      this.connection.end();
  }

}

module.exports=Database;