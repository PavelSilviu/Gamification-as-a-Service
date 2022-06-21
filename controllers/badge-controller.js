const data = require('../model/users-model');


function myFunction (req, res) {
    console.log("am ajuns1");
    var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
    });

    req.on('end', async function() {
        var response = [];
        const result = await data.allUsers();
        console.log("result");
        result.forEach(element => {
            response.push({ID : element.ID, UserName : element.UserName, Email : element.Email, Password : element.Password, Phone : element.Phone});
        });
        res.end(JSON.stringify(response));
    });
}


function allBadges (req, res) {
    console.log("am ajuns1");
    var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
    });

    req.on('end', async function() {
        var response = [];
        const result = await data.allBadges();
        console.log("result");
        result.forEach(element => {
            response.push({ID : element.ID, NameBadge : element.NameBadge, Action : element.Action, Start : element.Start});
        });
        res.end(JSON.stringify(response));
    });
}

module.exports = {myFunction, allBadges};