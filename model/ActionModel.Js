const { config } = require('../config');

var pool =require('./util/db').pool;

  function  read(actionName) { //users info

   return new Promise((resolve,reject)=>{
    var sql;
    if(config.type == "badge"){
    sql="Select * from progress where username='test'";
    }
    else sql="Select * from progress";
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
});

});
}
function updateAction(actionName,quantity){ //update for badges

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


async function updateXP(actionName,amount){
var actXP=await getActionXP(actionName);
var aux=actXP[0].XPRewarded;
var toaddXp=aux * amount;
pool.query("Select xp,nivel from progress where username='test'",(err,result)=>{
var values=[];
var res=JSON.parse(JSON.stringify(result));
var newvalue=res[0].xp+toaddXp
values.push(res[0].xp+toaddXp);
pool.query("Select * from levelconfig",(err,resultss)=>{
    var lvldetails=JSON.parse(JSON.stringify(resultss));
    console.log(lvldetails);
    if(lvldetails[0].type=="liniar"){
        var toupdate;
        for(i=0;i<lvldetails[0].maxlvl;i++)
        {
            if(res[0].nivel==0)
        { if( newvalue < lvldetails[0].nivel1  )
            {
            }   
     
    } else
        if(newvalue < i* lvldetails[0].nivel1&& newvalue>(i-1)*lvldetails[0].nivel1) 
        {toupdate=i;}
    }
    var val=[];val.push(toupdate-1);
pool.query("Update progress set nivel=? where username='test';",[val]);
    }
    else if(lvldetails[0].type=="expo"){
        var  toupdate;
        for(i=0;i<lvldetails[0].maxlvl;i++)  
        {
            var val=[];
        if(res[0].nivel==0)
        { if( newvalue < lvldetails[0].nivel1  )
            {
            }   
     
    } else  if(newvalue <= Math.pow(2,i) * lvldetails[0].nivel1 && newvalue> Math.pow(2,i-1)*lvldetails[0].nivel1) {toupdate=i;}
   
}
var val=[];val.push(toupdate);
pool.query("Update progress set nivel=? where username='test';",[val]);
    }
});
    pool.query("Update progress set xp = ? where username='test';",[values
    
],(err)=>{
    if(err) throw err;
});   
});
}
function getActionXP(action){
    var returnaux=new Promise((resolve,reject)=>{
        var val=[];
        val.push(action);
        pool.query("Select XPRewarded from actions where action=?",[val],(error,results,fields)=>{
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
