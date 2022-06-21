const data = require('../model/users-model');

function allLevels (req, res) {
    console.log("am ajuns1");
    var body = '';
    req.on('data', function(chunk) {
        body += chunk.toString('utf8');
    });

    req.on('end', async function() {
        var response = [];
        const result = await data.allLevels();
        console.log("result");
        result.forEach(element => {
            response.push({ID : element.ID, NameLevel : element.NameLevel, Level1 : element.Level1, XP : element.XP});
        });
        res.end(JSON.stringify(response));
    });
}

module.exports = {allLevels};