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
        else{
            res.statusCode = 404;
            res.end();
        }
    }
}
module.exports=HandleHtmlCssJs;