const { config } = require('../config');

var pool =require('./util/db').pool;

 function  read(actionName) {

   return new Promise((resolve,reject)=>{
    sql="Select * from progress where username='test'";
    pool.query(sql,(error,results,fields)=>{
    var result;
  if(results.length==0 ) {
    console.log("nu exista");
    result="nu exista actiunea";

}else {
    results=JSON.parse( JSON.stringify(results));
     result=results;
}
console.log(result);

return error? reject(error):resolve(result);
} );

});
}
function updateAction(actionName,quantity){

    var aux= new Promise((resolve,reject)=>{
        var sql;
        var values=[];
        pool.query("Select badge,current,needAmount from progress where Action=? and username ='test'",[actionName],(error,results,fields)=>{
            var result;
            if(results.length==0){
             console.log("Not found action");
             result=0;
                        }
                else {results=JSON.parse(JSON.stringify(results));
                    result=results;
                         }
                    //console.log(results);
      return error? reject(error):resolve(result);
    });
    });

  const ResBadges= Promise.resolve(aux);
    ResBadges.then( async function(v){
        v.forEach(element=>{
            try{var toaward;
                console.log(element.needAmount + "     "+ (element.current+quantity));
            if(element.needAmount<element.current)  toaward=1;
            else toaward=0;
          pool.query("UPDATE progress SET current=? ,awarded=? WHERE username='test' and badge=?", [element.current + quantity,toaward, element.badge], (error, result, fields) => {
                if (error)
                    throw error;
                console.log("Updated");
            });
        }
        finally {console.log("Updated");}
            
    });

});

return ResBadges;
}

function retrieveUpdate(actionName){
    var returnaux=new Promise((resolve,reject)=>{
        pool.query("Select current from progress where Action=? and username ='test'",[actionName],(error,results,fields)=>{
            var result;
            console.log(results);
            results=JSON.parse(JSON.stringify(results));
                    result=results;
                    console.log(results);
      return error? reject(error):resolve(result);
    });
    });
    var response=Promise.resolve(returnaux);
    return response;
}


async function updateXP(amount){
var actXP=await getActionXP("asd");
console.log(actXP[0].XPRewarded);
var toaddXp=actXP[0].XPRewarded*amount;
console.log(toaddXp);
pool.query("Update users set xp = ? where username='test';",toaddXp,(err)=>{
    if(err) throw err;
});
}
function getActionXP(action){
    var returnaux=new Promise((resolve,reject)=>{
        pool.query("Select XPRewarded from actions where action=?",[action],(error,results,fields)=>{
            var result;
            results=JSON.parse(JSON.stringify(results));
                    result=results;
                    console.log(results);
      return error? reject(error):resolve(result);
    });
    });
    var response=Promise.resolve(returnaux);
    return response;
}
module.exports={ 
    read,
    updateAction,
    retrieveUpdate,
    updateXP
}
