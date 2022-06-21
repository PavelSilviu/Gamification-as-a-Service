const users = require('./controllers/users-controller');

const user_controller = require('./controllers/users-controller');

var http=require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url == '/users') {
        console.log("fsdfs");
        users.myFunction(req, res);
        
    }
    if (req.url == '/users/GET' && req.method == "GET") {
        console.log("get");
        user_controller.myFunction(req, res);
        
    }

    if(req.url=='/views/users'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/users.html'));
        res.end();

    }

    if(req.url=='/views/users.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/users.html'));
        res.end();

    }

    if(req.url=="/views/users.js")
    {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/users.js'));
        res.end();
    }

    if (req.url == "/images/avatar1.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/avatar1.png'));
        res.end();
    }

    if (req.url == "/views/users.css") {
        console.log("Onrouter");
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/users.css'));
        res.end();
    }

    if (req.url == "/users/DELETE") {
        user_controller.deleteUser(req, res);
    }

    if(req.url=='/views/UserHome.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/UserHome.html'));
        res.end();

    }

    if (req.url == "/views/UserHome.css") {
        console.log("UserHome.css");
        res.writeHead(302, {
            'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/UserHome.css'));
        res.end();
    }

    if (req.url == "/images/pic1.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/pic1.png'));
        res.end();
    }

    if(req.url == '/views/login.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/login.html'));
        res.end();

    }

    if (req.url == "/views/login.css") {
        console.log("UserHome.css");
        res.writeHead(302, {
            'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/login.css'));
        res.end();
    }

    if(req.url == "/views/login-validari.js")
    {
      console.log("Onrouter");
      res.writeHead(302, {
        'Content-Type': 'text/html'
      });
      res.write(fs.readFileSync('views/login-validari.js'));
      res.end();
    }

    if(req.url=='/views/form.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/form.html'));
        res.end();

    }

    if (req.url == "/views/form.css") {
        console.log("Onrouter");
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/form.css'));
        res.end();
    }

    if(req.url=="/views/form.js")
    {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/form.js'));
        res.end();
    }


    if(req.url=='/views/badgesAndLevels.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/badgesAndLevels.html'));
        res.end();

    }

    if (req.url == "/views/badgesAndLevels.css") {
        console.log("Onrouter");
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/badgesAndLevels.css'));
        res.end();
    }

    if(req.url=="/views/badges.js")
    {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/badges.js'));
        res.end();
    }


    if(req.url=='/views/badges.html'){
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/badges.html'));
        res.end();

    }

    if (req.url == "/views/badges.css") {
        console.log("Onrouter");
        res.writeHead(302, {
        'Content-Type': 'text/html'
        });
        res.write(fs.readFileSync('views/badges.css'));
        res.end();
    }

    // if(req.url=="/views/badges.js")
    // {
    //     console.log("Onrouter");
    //     res.writeHead(302, {
    //         'Content-Type': 'text/html'
    //     });
    //     res.write(fs.readFileSync('views/badges.js'));
    //     res.end();
    // }



    if (req.url == "/images/badges/x.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/x.png'));
        res.end();
    }

    if (req.url == "/images/badges/newbie.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/newbie.png'));
        res.end();
    }

    if (req.url == "/images/badges/lurker.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/lurker.png'));
        res.end();
    }

    if (req.url == "/images/badges/squire.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/squire.png'));
        res.end();
    }

    if (req.url == "/images/badges/grand-master.png") {
        console.log("grand-master");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/grand-master.png'));
        res.end();
    }




    if (req.url == "/images/avatar.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/avatar.png'));
        res.end();
    }

    if (req.url == "/images/badges/first.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/first.png'));
        res.end();
    }

    if (req.url == "/images/badges/second.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/second.png'));
        res.end();
    }

    if (req.url == "/images/badges/third.png") {
        console.log("Onrouter");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/third.png'));
        res.end();
    }

    if (req.url == "/images/badges/fourth.png") {
        console.log("grand-master");
        res.writeHead(302, {
            'Content-Type': 'image/png'
        });
        res.write(fs.readFileSync('images/badges/fourth.png'));
        res.end();
    }
});

server.listen(4567);