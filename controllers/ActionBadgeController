var data=require('../model/ActionModel')





const actionFNC=(req,res) =>{
var body = '';
req.on('data', function (chunk) {
    body += chunk.toString('utf8');
});

req.on('end', async function () {
    var response=[];
   //var jsonObj=JSON.parse(body);
    const result =await data.read("test");
   // console.log(result);
result.forEach(element => {
        response.push({badge:element.badge,action:element.Action,current:element.current});
    });
    res.end(JSON.stringify(response));
});
};




const createFNC =()=>{
    data.create();
}
const updateFNC=(req,res)=>{
    console.log("Oncontroller");
    var body = '';
    req.on('data', function (chunk) {
        body += chunk.toString('utf8');
    });
    
    req.on('end', async function () {
       var jsonObj=JSON.parse(body);
       var result;
    
      try{ 
        if (jsonObj.cantitate!=null) 
       await data.updateAction(jsonObj.name,jsonObj.cantitate);
        else await data.updateAction(jsonObj.name,1);
      }
      finally{result=await data.retrieveUpdate(jsonObj.name);
        var amount=result[0].current+1;
        res.end(amount.toString());}

 })
}
module.exports={
    actionFNC,
    createFNC,
    updateFNC
}
