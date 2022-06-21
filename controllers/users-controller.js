console.log("am ajuns");
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

function deleteUser (req, res) {
    console.log("am ajuns1");
    var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
        data.deleteUser(body);
    });
    res.end("s-a sters");
}

module.exports = {myFunction, deleteUser};