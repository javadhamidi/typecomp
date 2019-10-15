// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
    fetch('data.json').then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(data => {
            console.log(data);
            myList = data.leaderboard;

            sortedList = [];
            lastCPM = 0;

            myList.forEach(element => {
                if(element[2] < lastCPM) {
                    sortedList.push(element);
                } else {
                    lastCPM = element[2];
                    sortedList.unshift(element);
                }
            });

            let rank = 1;
            sortedList.forEach(element => {
                let row$ = $('<tr/>');
                row$.append($('<td/>').html(rank++))
                for (var colIndex = 0; colIndex < 2; colIndex++) {
                    var cellValue = element[colIndex];
                    if (cellValue == null) cellValue = "";
                    row$.append($('<td/>').html(cellValue))
                }
                $(selector).append(row$);
            });
        }) 
    })
}
