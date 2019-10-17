// Builds the HTML Table out of myList.
function buildTable(selector) {
    fetch(window.location.protocol + "//" + window.location.hostname + ":3000/get").then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(data => {
            console.log(data);

            data.sort(function(a, b) {
                if(parseFloat(b.wpm) - parseFloat(a.wpm)) {
		    return parseFloat(b.wpm) - parseFloat(a.wpm);
		} else { return parseFloat(b.cpm) - parseFloat(a.cpm); }
	    })

            let rank = 1;
            data.forEach(element => {
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

