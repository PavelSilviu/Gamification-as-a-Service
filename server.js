const http = require('node:http');
let LoginController=require('./controllers/loginController');
let RegisterController=require('./controllers/registerController');
let fs = require('fs');
let HandleHtmlCssJs=require('./routes/getRequests/htmlCssRouteJs');
let HandleImageRoute=require('./routes/getRequests/imagesRoute');
const users = require('./controllers/users-controller');
const user_controller = require('./controllers/users-controller');
var qs=require('querystring');
const badgeact=require("./controllers/ActionBadgeController");
const lvlact=require("./controllers/ActionLevelController");
const config=require("./controllers/configController");
const confdata=require("./config");
confdata.checkConfig();

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
  confdata.checkConfig();
  if(req.method === 'GET'){
    if(req.url.match('.html') || req.url.match('.css') || req.url.match('.js')){
        new HandleHtmlCssJs(req,res);
    }
    else if(req.url.match('.png') || req.url.match('.jpg')){
        new HandleImageRoute(req,res);
    }
  }
  else if (req.method === 'POST' && req.url === '/login') {
    console.log('post login');
    new LoginController(req,res);
  } 
  else if (req.method === 'POST' && req.url === '/register') {
    console.log('request registerClient')
    new RegisterController(req,res);
  } 
  else if (req.url == '/users') {
    console.log("fsdfs");
    users.myFunction(req, res);
    
  }
  else if (req.url == '/users/GET' && req.method == "GET") {
      console.log("get");
      user_controller.myFunction(req, res);
  }
  else if (req.url == "/users/DELETE") {
    user_controller.deleteUser(req, res);
  }
  else if(req.url=="/gams/action" && req.method=="POST")
  {
    if(confdata.config.type=="badge")
    badgeact.updateFNC(req,res);
      else lvlact.updateFNC();
  }
  else if(req.url=='/gams'){
      if(confdata.config.done==1){
        res.writeHead(302, {
        'Content-Type': 'text/html'
      });

        res.write(fs.readFileSync('View/test.html'));
        res.end();
      }
      else{  res.writeHead(302, {
            'Content-Type': 'text/html'
          });
          res.write(fs.readFileSync('View/form.html'));
          res.end();
      }
  }
  else if(req.url=="/test"){
      console.log("Onrouter");
      res.writeHead(302, {
        'Content-Type': 'text/html'
      });
      res.write(fs.readFileSync('View/test.html'));
      res.end();
  }
  else if(req.url=="/test.js"){
      console.log("Onrouter");
      res.writeHead(302, {
        'Content-Type': 'text/html'
      });
      res.write(fs.readFileSync('View/test.js'));
      res.end();
  }
  else if(req.url=="/form-action" && req.method=="POST"){
      var body = '';
      req.on('data', function (chunk) {
      body += chunk;
          });

      req.on('end', async function () {
        let parsedData=qs.decode(body);
        var badges=[];
        console.log(parsedData);
      config.setTable(parsedData);

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('View/test.html'));
        res.end();
      });
  }
  else if(req.url=="/gams/retrieveData" && req.method=="GET"){
      badgeact.actionFNC(req,res);
  }
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});