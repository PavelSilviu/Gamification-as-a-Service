let User=require('../model/User');
class LoginController{
    body=null;
    inputsArray=null;
    input1Array=null;
    mypath=null;
    constructor (req, res){
        this.body = [];
        req.on('data', (chunk) => {
            this.body.push(chunk);
        }).on('end', () => {
            this.body = Buffer.concat(this.body).toString();
            //validare pt model
            let jsonObject=JSON.parse(this.body);
            let username=jsonObject.username;
            let pass=jsonObject.password;
            console.log('username: '+username);
            console.log('password: '+pass);
            //verificare in model
            let user=new User();
            async function fct(){
                var fctCallRes=0;
                var a=await user.findByName(username).then((result) => {
                    fctCallRes=2;
                }).catch((error) => {
                    fctCallRes=1;
                });
                var json;
                
                if(fctCallRes===2){
                    //response JSON
                    res.writeHead(200, {"Content-Type": "application/json"});
                    console.log('sunt in controller, userul exista');
                    json = JSON.stringify({ 
                    existent: "da"
                  });
                }  
                else if(fctCallRes===1){
                    //status code 404 or smth
                    res.writeHead(404, {"Content-Type": "application/json"});
                    console.log('sunt in controler, userul nu exista');
                    json = JSON.stringify({ 
                        existent: "nu"
                    });
                }
                res.end(json)
            }
            fct();
            
        });
    };
}
module.exports=LoginController;