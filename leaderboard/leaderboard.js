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

            myList.sort(function(a, b) {
                if(parseFloat(b[1]) - parseFloat(a[1])) {
		    return parseFloat(b[1]) - parseFloat(a[1]);
		} else { return parseFloat(b[2]) - parseFloat(a[2]); }
	    })

            let rank = 1;
            myList.forEach(element => {
                let row$ = $('<tr/>');
                row$.append($('<td/>').html(rank++ + "."))
                row$.append($('<td/>').html(element[0]))
                row$.append($('<td align="right"/>').html(element[1]))
                $(selector).append(row$);
            });
        })
    })
}
