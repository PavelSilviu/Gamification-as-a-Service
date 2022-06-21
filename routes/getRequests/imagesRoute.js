let fs=require('fs');
class HandleImageRoute{
    constructor(req, res){
        if (req.url === '/avatar1.png') {
            console.log('request avatar1.png')
            fs.readFile('./images/avatar1.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/images/avatar1.png') {
          console.log('request avatar1.png')
          fs.readFile('./images/avatar1.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/images/avatar.png') {
          console.log('request avatar.png')
          fs.readFile('./images/avatar.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        } 
        else if (req.url === '/avatar.png') {
            console.log('request avatar.png')
            fs.readFile('./images/avatar.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        } 
        else if (req.url === '/badge1.jpg') {
            console.log('request badge1 jpg')
            fs.readFile('./images/badge1.jpg', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/little_guy.png') {
            console.log('request little_guy.png')
            fs.readFile('./images/little_guy.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/pic1.png') {
            console.log('request pic1.png')
            fs.readFile('./images/pic1.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/images/pic1.png') {
          console.log('request pic1.png')
          fs.readFile('./images/pic1.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/wave_home.png') {
            console.log('request wave_home.png')
            fs.readFile('./images/wave_home.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/wave.png') {
            console.log('request wave.png')
            fs.readFile('./images/wave.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/x.png') {
            console.log('request x.png')
            fs.readFile('./images/x.png', (err, data) => {
                if (err) {
                  res.writeHead(404, {'Content-Type': 'image'});
                  res.end();
                  console.error('eroare la readfile');
                  return;
                }
                else{
                  res.writeHead(200, {'Content-Type': 'image/png'});
                  res.write(data);
                  res.end();
                }
            });
        }
        else if (req.url === '/images/badges/x.png') {
          console.log('request x.png')
          fs.readFile('./images/badges/x.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/newbie.png') {
          console.log('request newbie.png')
          fs.readFile('./images/badges/newbie.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/lurker.png') {
          console.log('request lurker.png')
          fs.readFile('./images/badges/lurker.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/squire.png') {
          console.log('request squire.png')
          fs.readFile('./images/badges/squire.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/grand-master.png') {
          console.log('request grand-master.png')
          fs.readFile('./images/badges/grand-master.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/first.png') {
          console.log('request first.png')
          fs.readFile('./images/badges/first.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/second.png') {
          console.log('request second.png')
          fs.readFile('./images/badges/second.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/third.png') {
          console.log('request third.png')
          fs.readFile('./images/badges/third.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
              }
          });
        }
        else if (req.url === '/images/badges/fourth.png') {
          console.log('request fourth.png')
          fs.readFile('./images/badges/fourth.png', (err, data) => {
              if (err) {
                res.writeHead(404, {'Content-Type': 'image'});
                res.end();
                console.error('eroare la readfile');
                return;
              }
              else{
                res.writeHead(200, {'Content-Type': 'image/png'});
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
module.exports=HandleImageRoute;