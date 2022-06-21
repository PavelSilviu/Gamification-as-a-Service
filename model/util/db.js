var mysql=require("mysql");

var pool=mysql.createPool(
    {   
        connectionLimit:10,
        host:'localhost',
        user:'root',
        password:'proiect',
        database:'gams'
    }
);

exports.pool=pool;