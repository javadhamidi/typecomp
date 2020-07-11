//var successAudio = document.getElementById('successAudio');
//var failAudio = document.getElementById('failAudio');
//var endAudio = document.getElementById('endAudio');


let wordList = $.ajax({
  dataType: "json",
  url: window.location.href.replace("index.php", "res/wordlist.json"),
  async: false,
}).responseJSON.wordlist


String.prototype.toSentenceCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function addWords() {
  // clear existing word-section
  let wordSection = $("#word-section")[0];
  wordSection.innerHTML = "";
  $("#typebox")[0].value = "";

  for (let i = 350; i > 0; i--) {
    let words = shuffle(wordList);
    let wordSpan = `<span>${words[i]}</span>`;
    wordSection.innerHTML += wordSpan;
  } // mark first word as current-word


  wordSection.firstChild.classList.add("current-word"); // mark last word with magic-box
  // let magicBox = document.createElement("DIV");
  // magicBox.classList.add("magic-box");
  // wordSection.appendChild(magicBox);
} //////////////////////////////////////////
// Word Colors


let colorCurrentWord = "#dddddd";
let colorCorrectWord = "#93C572";
let colorIncorrectWord = "#e50000"; // Word Count and other data.

let wordData = {
  seconds: 60,
  correct: 0,
  incorrect: 0,
  total: 0,
  typed: 0
}; //////////////////////////////////////////
// Initial implementation notes:
// next word on <space>, if empty, then set value=""
// after <space> if value == current-word, mark as correct-word
// else, mark as incorrect-word
// if value.length != current-word[:value.length], mark as incorrect-word
// else, mark as current-word
//////////////////////////////////////////

function checkWord(word) {
  const wval = word.value.trim(); // how much we have of the current word.

  let current = $(".current-word")[0];
  let currentString = current.innerHTML; // check if we have any typing errors and
  // make sure there is a real word to check
  // https://github.com/anschwa/typing-test/issues/2

  const noMatch = wval !== currentString;
  const emptyWords = wval === '' || currentString === '';

  if (noMatch || emptyWords) {
    current.classList.add("incorrect-word-bg");
    return false;
  } else {
    current.classList.remove("incorrect-word-bg");
    return true;
  }
}

function submitWord(word) {
  // update current-word and
  // keep track of correct & incorrect words
  let current = $(".current-word")[0];
  if (checkWord(word)) {
    successAudio.play();
    current.classList.remove("current-word");
    current.classList.add("correct-word-c");
    wordData.correct += 1;
    wordData.typed += word.value.trim().length;
  } else {
    failAudio.play();
    current.classList.remove("current-word", "incorrect-word-bg");
    current.classList.add("incorrect-word-c");
    wordData.incorrect += 1;
  } // update wordData

  wordData.total = wordData.correct + wordData.incorrect; // make the next word the new current-word.
  current.nextSibling.classList.add("current-word");
}

function clearLine() {
  // remove past words once you get to the next line
  let wordSection = $("#word-section")[0];
  let current = $(".current-word")[0]; // second line (first word)

  let previous = current.previousSibling; // first line (last word)

  let children = $(".correct-word-c, .incorrect-word-c").length; // <span>'s on the next line have a greater offsetTop value
  // than those on the top line.
  // Remove words until the first word on the second line
  // is the fistChild of word-section.

  if (current.offsetTop > previous.offsetTop) {
    for (let i = 0; i < children; i++) {
      wordSection.removeChild(wordSection.firstChild);
    }
  }
}

var endPlayOnce = false;

function isTimer(seconds) {
  // BUG: page refresh with keyboard triggers onkeyup and starts timer
  // Use restart button to reset timer
  let time = seconds; // only set timer once

  let one = $("#timer > span")[0].innerHTML;

  if (one == "1:00") {
    let typingTimer = setInterval(() => {
      if (time == 4 && !endPlayOnce) {
        endPlayOnce = true;
        endAudio.play();
      }
      if (time <= 0) {
        clearInterval(typingTimer);
        $("#timer > span")[0].innerHTML = "DONE";
	calculateWPM(wordData);
        submitResult(wordData);
      } else {
        time -= 1;
        let timePad = time < 10 ? "0" + time : time; // zero padded

        $("#timer > span")[0].innerHTML = `0:${timePad}`;
      }
    }, 1000);
  } else if (one == "DONE") {
    return false;
  }

  return true;
}

function calculateWPM(data) {
  let {
    seconds,
    correct,
    incorrect,
    total,
    typed
  } = data;
  let min = seconds / 60;
  let wpm = Math.ceil(typed / 5);
  let accuracy = Math.ceil(correct / total * 100); // prevent negative wpm from incorrect words

  if (wpm < 0) {
    wpm = 0;
  } // template strings are pretty cool


  let results = `<ul id="results" style="padding: 0;">
        <li>WPM: <span class="wpm-value">${wpm}</span></li>
        <li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
        <li id="results-stats">
        Total Words: <span>${total}</span> |
        Correct Words: <span>${correct}</span> |
        Incorrect Words: <span>${incorrect}</span> |
        Characters Typed: <span>${typed}</span>
        </li>
        </ul>`;
  $("#word-section")[0].innerHTML = results; // color code accuracy

  let wpmClass = $("li:nth-child(2) .wpm-value")[0].classList;

  if (accuracy > 80) {
    wpmClass.add("correct-word-c");
  } else {
    wpmClass.add("incorrect-word-c");
  }
}

function typingTest(e) {
  e = e || window.event;
  let kcode = e.keyCode;
  let word = $("#typebox")[0]; // check if empty (starts with space)

  if (word.value.match(/^\s/g) || word.value == "") {
    word.value = "";
  } else {
    // Only score when timer is on.
    if (isTimer(wordData.seconds)) {
      if (kcode == 32) {
        submitWord(word); // keep track of correct / incorrect words

        clearLine(); // get rid of old words

        $("#typebox")[0].value = ""; // clear typebox after each word
      }
    }
  }
}

function restartTest() {
  $("#typebox")[0].value = "";
  location.reload();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(".login-input").on("keydown", function(e) {
  if(e.keyCode == 13) {
    setName();
  }
});

async function setName() {
  let desiredName = $(".login-input")[0].value.split(" ").join("").toSentenceCase() + " " + $(".login-input")[1].value.split(" ").join("").toSentenceCase();
  let result = await checkName(desiredName);
  if(!result) {
    // Invalid name
    $(".login-input").parent().effect("shake");
  } else {
    // Valid name
    setCookie("username", desiredName, 365);
    fetch(window.location.protocol + "//" + window.location.hostname + ":3000/update?name=" + desiredName + "&wpm=0&cpm=0");
    $("#login-prompt").parent().remove();
    $(".blurred").css({ "filter" : "none", "opacity" : "1", "pointer-events" : "auto" })
  }
}



function submitResult(data) {
  let {
    seconds,
    correct,
    incorrect,
    total,
    typed
  } = data;
  let min = seconds / 60;
  let wpm = Math.ceil(typed / 5);
  let accuracy = Math.ceil(correct / total * 100); // prevent negative wpm from incorrect words

  if (wpm < 0) {
    wpm = 0;
  }

  createCookie("tp_wpm", wpm); 
  createCookie("tp_cpm", 0);  
  $.ajax({ url: 'includes/update_score.inc.php' }); 
}



function createCookie(name, value) { 
  let expires; 

  let date = new Date(); 
  date.setTime(date.getTime() + (60 * 1000)); 
  expires = "; expires=" + date.toGMTString(); 
    
  document.cookie = escape(name) + "=" +  
      escape(value) + expires + "; path=/"; 
} 

