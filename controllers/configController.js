const pool=require("../model/util/db").pool;
const config=require("../config");

users=["test","Alin","Mihai","Matei"];
 function setTable(data){
if(config.config.done==1) return 0 ;

    if("level" in data){
   
        pool.query("Create Table progress (username VARCHAR(255) , xp INT , nivel INT) ",()=>{
            users.forEach(element=>{
                var  values=[];
                 values.push(element);
                 values.push(0);
                 values.push(0);
                 setTimeout(() => {
                     
                 }, 100);
                
                  pool.query("Insert into progress (username,xp,nivel) Values (?)",[values],async (err)=>{
                     if(err) throw err;
                 });
                }); 
        });
     
         pool.query("Create table actions (action VARCHAR(255), XPRewarded INT)",()=>{
            for(i=0;i<data.Action.length;i++)
      {
        var values=[data.Action[i],data.Awarded[i]];
        pool.query("Insert into actions (action,XPRewarded) Values (?) ",[values],(err)=>
        {
            if(err ) throw err;
        });
      }
         });
    
        pool.query("Create table levelconfig (nivel1 INT , type VARCHAR(20),maxlvl INT) ",()=>
        {
            var values=[];
     values.push(data.Level1);
     if(data.liniar!=null)
     values.push("liniar");
     else values.push("expo");
     values.push(data.MaxLevel);
      pool.query("Insert into levelconfig (nivel1,type,maxlvl) Values (?)",[values],(err)=>{
        if(err) throw err;
      });

        });

       config.setConfig({type:"level",done:true});
       pool.query("Create Table config (type VARCHAR(255),done INT)",()=>{
        var values=[];
        values.push("level");
        values.push(1);
          pool.query("Insert into config (type,done) VAlues (?)",[values],(err)=>{
        if(err) throw err;
       
       });
     });
    }
    else if("badge" in data)
    {
    setTimeout(()=>{},100);
    pool.query("CREATE TABLE progress (username VARCHAR(255) ,badge VARCHAR(255) ,Action VARCHAR(255) ,needAmount INT ,current INT,awarded INT);", (err)=>{
        if(err) throw err;
        console.log("succes create");
        users.forEach(element => {
            for(i=0;i<data.Badge.length;i++)
            {values=[];
                values.push(element);
                values.push(data.Badge[i]);
                values.push(data.Function[i]);
                values.push(5);
                values.push(0);
                values.push(0);
            pool.query("Insert into progress (username,badge,Action,needamount,current,awarded) VALUES (?) ;",[values] ,(err)=>{
                if(err) throw err;
                console.log("Succes insert");
            });
    };
});
});
pool.query("Create Table config (type VARCHAR(255),done INT)",()=>{
    var values=[];
    values.push("badge");
    values.push(1);
      pool.query("Insert into config (type,done) VAlues (?)",[values],(err)=>{
    if(err) throw err;
   
   });
 });
config.setConfig({type:"badge",done:true});
}
}


module.exports={
    setTable
}