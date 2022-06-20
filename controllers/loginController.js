let User=require('../model/User');
let fs = require('fs');
let path=require('path');

class LoginController{
    body=null;
    inputsArray=null;
    input1Array=null;
    input2Array=null;
    mypath=null;
    res=null;
    constructor (req, res){
        this.body = [];
        this.res=res;
        req.on('data', (chunk) => {
            this.body.push(chunk);
        }).on('end', () => {
            this.body = Buffer.concat(this.body).toString();
        }); 
        ()=>{
            this.inputsArray=this.body.split('&');
            this.input1Array=this.inputsArray[0].split('=');
            this.input2Array=this.inputsArray[1].split('=');
            this.finalInput1=this.input1Array[1];
            this.finalInput2=this.input2Array[1];
            //validare pt model
            this.validate(this.finalInput1, this.finalInput2);
        }
        //redirect
    };
    validate(name, pass){
        console.log('jopa');
        let user=new User();
        if(user.findByName('name')!==0){
            console.log('request UserHome din loginController');
            fs.readFile('./views/UserHome.html', 'utf8', (err, data) => {
                if (err) {
                  this.res.writeHead(404, {'Content-Type': 'text/html'});
                  this.res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  this.res.write(data);
                  this.res.end();
                }
            });
        }
        else{
            console.log('request login din loginController')
            fs.readFile('./views/loginClient.html', 'utf8', (err, data) => {
                if (err) {
                  this.res.writeHead(404, {'Content-Type': 'text/html'});
                  this.res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  this.res.write(data);
                  this.res.end();
                }
            });
        }
    }


}
module.exports=LoginController;