//const router = require("./diy-router");
//const app = router();
var http=require('http');
var fs = require('fs');
var qs=require('querystring');
const badgeact=require("./Controller/ActionBadgeController");
const lvlact=require("./Controller/ActionLevelController");
const config=require("./Controller/configController");
const confdata=require("./config");
confdata.checkConfig();
var server=http.createServer(function(req,res){
    confdata.checkConfig();
    if(req.url=="/gams/action" && req.method=="POST")
    {
      if(confdata.config.type=="badge")
      badgeact.updateFNC(req,res);
        else lvlact.updateFNC();
    }
    else if(req.url=='/gams'){
      if(confdata.config.done==1)
      {res.writeHead(302, {
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
    else if(req.url=="/test")
    {
      console.log("Onrouter");
      res.writeHead(302, {
        'Content-Type': 'text/html'
      });
      res.write(fs.readFileSync('View/test.html'));
      res.end();
    }
    else if(req.url=="/test.js")
    {
      console.log("Onrouter");
      res.writeHead(302, {
        'Content-Type': 'text/html'
      });
      res.write(fs.readFileSync('View/test.js'));
      res.end();
    }
    else if(req.url=="/form-action" && req.method=="POST")
    {
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
else if(req.url=="/gams/retrieveData" && req.method=="GET")
    {
        badgeact.actionFNC(req,res);
    }
else {
  res.statusCode(404);
  res.end();
}
});

server.listen(3000);