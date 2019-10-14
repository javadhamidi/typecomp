let express = require('express');
let fs = require('fs');
let temp;

temp = fs.readFileSync('data.json');
let data = JSON.parse(temp);
console.log(data);

console.log('server is starting');
let app = express();
let server = app.listen(3000, function() { console.log('listening') });


app.get('/get', function(request, response) { response.send(data.leaderboard) });
app.get('/update/:info', updateLeaderboard);
// /update/name,wpm,cpm


function updateLeaderboard(request, response) {
    let info = request.params.info.split(',');
    data.leaderboard.forEach(function(item, index, object) {    
        if (item[0] == info[0]) {
            object.splice(index, 1);
        }
    });

	
    data.leaderboard.push(info);
    let reply = 'leaderboard updated';
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function() { console.log(reply) });
    response.send(reply);
}


