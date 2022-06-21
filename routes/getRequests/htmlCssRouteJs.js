let fs=require('fs');
class HandleHtmlCssJs{
    constructor(req, res){
        if(req.url.match('.html')){
            this.matchesHtml(req,res);
        }
        else if(req.url.match('.css')){
            this.matchesCss(req,res);
        }
        else
            this.matchesJs(req,res);
    }

    matchesHtml(req,res){
        if (req.url === '/loginClient.html') {
            console.log('request login')
            fs.readFile('./views/loginClient.html', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/registerClient.html') {
            console.log('request registerClient')
            fs.readFile('./views/registerClient.html', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/UserHome.html') {
            console.log('request UserHome')
            fs.readFile('./views/UserHome.html', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/views/UserHome.html') {
          console.log('request UserHome')
          fs.readFile('./views/UserHome.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/form.html') {
            console.log('request form')
            fs.readFile('./views/form.html', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/views/form.html') {
          console.log('request form')
          fs.readFile('./views/form.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/views/users.html') {
          console.log('request users')
          fs.readFile('./views/users.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/views/login.html') {
          console.log('request login')
          fs.readFile('./views/login.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/views/badgesAndLevels.html') {
          console.log('request badgesAndLevels')
          fs.readFile('./views/badgesAndLevels.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/views/badges.html') {
          console.log('request badges')
          fs.readFile('./views/badges.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/views/UserDetails.html') {
          console.log('request UserDetails')
          fs.readFile('./views/UserDetails.html', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        } 
        else{
            res.statusCode = 404;
            res.end();
        }
    }

    matchesCss(req,res){
        if (req.url === '/loginClient.css') {
            console.log('requested login css');
            fs.readFile('./views/loginClient.css', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/login.css') {
          console.log('requested login css');
          fs.readFile('./views/loginClient.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/UserHome.css') {
            console.log('requested UserHome css');
            fs.readFile('./views/UserHome.css', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/registerClient.css') {
            console.log('requested registerClient css');
            fs.readFile('./views/registerClient.css', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/form.css') {
            console.log('requested form css');
            fs.readFile('./views/form.css', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'text/css'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/views/form.css') {
          console.log('requested form css');
          fs.readFile('./views/form.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/views/users.css') {
          console.log('requested users css');
          fs.readFile('./views/users.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/views/UserHome.css') {
          console.log('requested UserHome css');
          fs.readFile('./views/UserHome.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/views/badgesAndLevels.css') {
          console.log('requested badgesAndLevels css');
          fs.readFile('./views/badgesAndLevels.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/views/badges.css') {
          console.log('requested badges css');
          fs.readFile('./views/badges.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url.match('userDetails.css')) {
          console.log('requested UserDetails css');
          fs.readFile('./views/userDetails.css', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
              }
          });
        }
        else{
            res.statusCode = 404;
            res.end();
        }
    }

    matchesJs(req,res){
        if(req.url  === '/form.js'){
            console.log('requested form js');
            fs.readFile('./views/form.js', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body>404 Page not found</body></html>');
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.write(data);
                  res.end();
                }
            });
        }
        else if(req.url  === '/views/login-validari.js'){
          console.log('requested login-validari js');
          fs.readFile('views/login-validari.js', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        }
        else if(req.url  === '/views/form.js'){
          console.log('requested form js');
          fs.readFile('./views/form.js', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        }
        else if(req.url  === '/views/badges.js'){
          console.log('requested badges js');
          fs.readFile('./views/badges.js', 'utf8', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body>404 Page not found</body></html>');
                console.error('eroare la readfile');
                return;
              }
              else{
                res.write(data);
                res.end();
              }
          });
        }
        else{
            res.statusCode = 404;
            res.end();
        }
    }
}
module.exports=HandleHtmlCssJs;