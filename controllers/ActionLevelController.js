
var data=require('../model/ActionModel')
function updateFNC(req,res){

var body = '';
req.on('data', function (chunk) {
    body += chunk.toString('utf8');
});

req.on('end', async function () {
    var jsonObj=JSON.parse(body);
    var result;
    if(jsonObj.amount>1){
result=await data.updateXP(jsonObj.name,jsonObj.amount)
    }
    else result=await data.updateXP(jsonObj.name,1);
    res.end("XpAdded");
});
}
const actionFNC=(req,res) =>{
    var body = '';
    req.on('data', function (chunk) {
        body += chunk.toString('utf8');
    });
    
    req.on('end', async function () {
        var response=[];
       //var jsonObj=JSON.parse(body);
        const result =await data.read("");
       // console.log(result);
    result.forEach(element => {
            response.push({action:element.action});
        });
        res.end(JSON.stringify(response));
    });
    };
module.exports={
updateFNC,actionFNC
}