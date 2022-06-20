const http = require('node:http');
let LoginController=require('./controllers/loginController');
let RegisterController=require('./controllers/registerController')
let fs = require('fs');
let HandleHtmlCssJs=require('./routes/getRequests/htmlCssRouteJs');
let HandleImageRoute=require('./routes/getRequests/imagesRoute');
const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    if(req.url.match('.html') || req.url.match('.css') || req.url.match('.js')){
        new HandleHtmlCssJs(req,res);
    }
    else if(req.url.match('.png') || req.url.match('.jpg')){
        new HandleImageRoute(req,res);
    }
  }
  else if (req.method === 'POST' && req.url === '/login') {
    new LoginController(req,res).validate();
  } 
  else if (req.method === 'POST' && req.url === '/register') {
    new RegisterController(req,res);
  } 
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});