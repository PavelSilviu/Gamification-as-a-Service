var pool=require('./model/util/db').pool
var config={   
    type:"",
    done:false
}
function setConfig(data){
    config.type=data.type;
    config.done=data.done;
    if(config.type=="level"){

    }
}
function checkConfig(){
     pool.query("Select * from config ", (err,results)=>{
        if(err!=null){
        if(err.errno==1146){
            setConfig({type:"",done:0});
            return 0;
        }
        else throw err;
    }
   else  {
    var result=JSON.parse( JSON.stringify(results));
    console.log(result);

    setConfig({type:result[0].type,done:result[0].done});
    console.log(config);

   };
    });
}
module.exports={
    config,
    setConfig,checkConfig
}
