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
app.get('/update', updateLeaderboard);
// /update
//  ?name=xxx
//  &remove (optional)
//  &wpm=xxx
//  &cpm=xxx


function updateLeaderboard(request, response) {
    let args = request.query;
    console.log(args);

    data.leaderboard.forEach(function(item, index, object) {
        if (item.name == args.name) {
            console.log(object.splice(index, 1));
        }
    });

    if(args.remove == undefined) {
        data.leaderboard.push(args);
    }

    let reply = 'leaderboard updated';
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function() { console.log(reply) });
    response.send(reply);
}

