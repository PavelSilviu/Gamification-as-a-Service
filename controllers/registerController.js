let User=require('../model/User');

class LoginController{
    req=null;
    res=null;
    constructor (request, response){
        this.req=request;
        this.res=response;
        let body = [];
        this.req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            let inputsArray=body.split('?');
            let input1Array=inputsArray[0].split('=');
            let input2Array=inputsArray[1].split('=');

            //validare pt model
            this.validate(input1Array[1], input2Array[1]);

            this.res.end(body);
        });
    };
    validate(name, pass){
            console.log(name+' '+pass);
    }


}
module.exports=LoginController;