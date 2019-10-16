// Builds the HTML Table out of myList.
function buildTable(selector) {
    fetch('data.json?nocache=' + (new Date()).getTime()).then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(data => {
            console.log(data);
            myList = data.leaderboard;

            myList.sort(function(a, b) {
                if(parseFloat(b.wpm) - parseFloat(a.wpm)) {
		    return parseFloat(b.wpm) - parseFloat(a.wpm);
		} else { return parseFloat(b.cpm) - parseFloat(a.cpm); }
	    })

            let rank = 1;
            myList.forEach(element => {
                let row$ = $('<tr/>');
                row$.append($('<td/>').html(rank++ + "."))
                row$.append($('<td/>').html(element.name))
                row$.append($('<td align="right"/>').html(element.wpm))
                $(selector).append(row$);
            });
        })
    })
}

function updateTable(selector) {
  $(selector).empty();
  buildTable(selector);
}
