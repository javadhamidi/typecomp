var successAudio = document.getElementById('successAudio');
var failAudio = document.getElementById('failAudio');
var endAudio = document.getElementById('endAudio');

let wordList = [
// Borrowed from xkcd password generator which borrowed it from wherever
"ability","able","aboard","about","above","accept","accident","according",
"account","accurate","acres","across","act","action","active","activity",
"actual","actually","add","addition","additional","adjective","adult","adventure",
"advice","affect","afraid","after","afternoon","again","against","age",
"ago","agree","ahead","aid","air","aeroplane","alike","alive",
"all","allow","almost","alone","along","aloud","alphabet","already",
"also","although","am","among","amount","ancient","angle","angry",
"animal","announced","another","answer","ants","any","anybody","anyone",
"anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
"appropriate","are","area","arm","army","around","arrange","arrangement",
"arrive","arrow","art","article","as","aside","ask","asleep",
"at","ate","atmosphere","atom","atomic","attached","attack","attempt",
"attention","audience","author","automobile","available","average","avoid","aware",
"away","baby","back","bad","badly","bag","balance","ball",
"balloon","band","bank","bar","bare","bark","barn","base",
"baseball","basic","basis","basket","bat","battle","be","bean",
"bear","beat","beautiful","beauty","became","because","become","becoming",
"bee","been","before","began","beginning","begun","behaviour","behind",
"being","believed","bell","belong","below","belt","bend","beneath",
"bent","beside","best","bet","better","between","beyond","bicycle",
"bigger","biggest","bill","birds","birth","birthday","bit","bite",
"black","blank","blanket","blew","blind","block","blood","blow",
"blue","board","boat","body","bone","book","border","born",
"both","bottle","bottom","bound","bow","bowl","box","boy",
"brain","branch","brass","brave","bread","break","breakfast","breath",
"breathe","breathing","breeze","brick","bridge","brief","bright","bring",
"broad","broke","broken","brother","brought","brown","brush","buffalo",
"build","building","built","buried","burn","burst","bus","bush",
"business","busy","but","butter","buy","by","cabin","cage",
"cake","call","calm","came","camera","camp","can","canal",
"cannot","cap","capital","captain","captured","car","carbon","card",
"care","careful","carefully","carried","carry","case","cast","castle",
"cat","catch","cattle","caught","cause","cave","cell","cent",
"centre","central","century","certain","certainly","chain","chair","chamber",
"chance","change","changing","chapter","character","characteristic","charge","chart",
"cheque","cheese","chemical","chest","chicken","chief","child","children",
"choice","choose","chose","chosen","church","circle","circus","citizen",
"city","class","classroom","claws","clay","clean","clear","clearly",
"climate","climb","clock","close","closely","closer","cloth","clothes",
"clothing","cloud","club","coach","coal","coast","coat","coffee",
"cold","collect","college","colony","colour","column","combination","combine",
"come","comfortable","coming","command","common","community","company","compare",
"compass","complete","completely","complex","composed","composition","compound","concerned",
"condition","congress","connected","consider","consist","consonant","constantly","construction",
"contain","continent","continued","contrast","control","conversation","cook","cookies",
"cool","copper","copy","corn","corner","correct","correctly","cost",
"cotton","could","count","country","couple","courage","course","court",
"cover","cow","cowboy","crack","cream","create","creature","crew",
"crop","cross","crowd","cry","cup","curious","current","curve",
"customs","cut","cutting","daily","damage","dance","danger","dangerous",
"dark","darkness","date","daughter","dawn","day","dead","deal",
"dear","death","decide","declared","deep","deeply","deer","definition",
"degree","depend","depth","describe","desert","design","desk","detail",
"determine","develop","development","diagram","diameter","did","die","differ",
"difference","different","difficult","difficulty","dig","dinner","direct","direction",
"directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
"disease","dish","distance","distant","divide","division","do","doctor",
"does","dog","doing","doll","dollar","done","donkey","door",
"dot","double","doubt","down","dozen","draw","drawn","dream",
"dress","drew","dried","drink","drive","driven","driver","driving",
"drop","dropped","drove","dry","duck","due","dug","dull",
"during","dust","duty","each","eager","ear","earlier","early",
"earn","earth","easier","easily","east","easy","eat","eaten",
"edge","education","effect","effort","egg","eight","either","electric",
"electricity","element","elephant","eleven","else","empty","end","enemy",
"energy","engine","engineer","enjoy","enough","enter","entire","entirely",
"environment","equal","equally","equator","equipment","escape","especially","essential",
"establish","even","evening","event","eventually","ever","every","everybody",
"everyone","everything","everywhere","evidence","exact","exactly","examine","example",
"excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
"exist","expect","experience","experiment","explain","explanation","explore","express",
"expression","extra","eye","face","facing","fact","factor","factory",
"failed","fair","fairly","fall","fallen","familiar","family","famous",
"far","farm","farmer","farther","fast","fastened","faster","fat",
"father","favourite","fear","feathers","feature","fed","feed","feel",
"feet","fell","fellow","felt","fence","few","fewer","field",
"fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
"film","final","finally","find","fine","finest","finger","finish",
"fire","fireplace","firm","first","fish","five","fix","flag",
"flame","flat","flew","flies","flight","floating","floor","flow",
"flower","fly","fog","folks","follow","food","foot","football",
"four","force","foreign","forest","forget","forgot","forgotten","form",
"former","fort","forth","forty","forward","fought","found","four",
"fourth","fox","frame","free","freedom","frequently","fresh","friend",
"friendly","frighten","frog","from","front","frozen","fruit","fuel",
"full","fully","fun","function","funny","fur","furniture","further",
"future","gain","game","garage","garden","gas","gasoline","gate",
"gather","gave","general","generally","gentle","gently","get","getting",
"giant","gift","girl","give","given","giving","glad","glass",
"globe","go","goes","gold","golden","gone","good","goose",
"got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
"graph","grass","gravity","grey","great","greater","greatest","greatly",
"green","grew","ground","group","grow","grown","growth","guard",
"guess","guide","gulf","gun","habit","had","hair","half",
"halfway","hall","hand","handle","handsome","hang","happen","happened",
"happily","happy","harbour","hard","harder","hardly","has","hat",
"have","having","hay","he","headed","heading","health","heard",
"hearing","heart","heat","heavy","height","held","hello","help",
"helpful","her","herd","here","herself","hidden","hide","high",
"higher","highest","highway","hill","him","himself","his","history",
"hit","hold","hole","hollow","home","honour","hope","horn",
"horse","hospital","hot","hour","house","how","however","huge",
"human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
"hurt","husband","ice","idaea","identity","if","ill","image",
"imagine","immediately","importance","important","impossible","improve","in","inch",
"include","including","income","increase","indeed","independent","indicate","individual",
"industrial","industry","influence","information","inside","instance","instant","instead",
"instrument","interest","interior","into","introduced","invented","involved","iron",
"is","island","it","its","itself","jack","jar","jet",
"job","join","joined","journey","joy","judge","jump","jungle",
"just","keep","kept","key","kids","kill","kind","kitchen",
"knew","knife","know","knowledge","known","label","labour","lack",
"lady","laid","lake","lamp","land","language","large","larger",
"largest","last","late","later","laugh","law","lay","layers",
"lead","leader","leaf","learn","least","leather","leave","leaving",
"led","left","leg","length","lesson","let","letter","level",
"library","lie","life","lift","light","like","likely","limited",
"line","lion","lips","liquid","list","listen","little","live",
"living","load","local","locate","location","log","lonely","long",
"longer","look","loose","lose","loss","lost","lot","loud",
"love","lovely","low","lower","luck","lucky","lunch","lungs",
"lying","machine","machinery","mad","made","magic","magnet","mail",
"main","mainly","major","make","making","man","managed","manner",
"manufacturing","many","map","mark","market","married","mass","massage",
"master","material","mathematics","matter","may","maybe","me","meal",
"mean","means","meant","measure","meat","medicine","meet","melted",
"member","memory","men","mental","merely","met","metal","method",
"mice","middle","might","mighty","mile","military","milk","mill",
"mind","mine","minerals","minute","mirror","missing","mission","mistake",
"mix","mixture","model","modern","molecular","moment","money","monkey",
"month","mood","moon","more","morning","most","mostly","mother",
"motion","motor","mountain","mouse","mouth","move","movement","movie",
"moving","mud","muscle","music","musical","must","my","myself",
"mysterious","nails","name","nation","national","native","natural","naturally",
"nature","near","nearby","nearer","nearest","nearly","necessary","neck",
"needed","needle","needs","negative","neighbour","neighbourhood","nervous","nest",
"never","new","news","newspaper","next","nice","night","nine",
"no","nobody","nodded","noise","none","noon","nor","north",
"nose","not","note","noted","nothing","notice","noun","now",
"number","numeral","nuts","object","observe","obtain","occasionally","occur",
"ocean","of","off","offer","office","officer","official","oil",
"old","older","oldest","on","once","one","only","onto",
"open","operation","opinion","opportunity","opposite","or","orange","orbit",
"order","ordinary","organisation","organised","origin","original","other","ought",
"our","ourselves","out","outer","outline","outside","over","own",
"owner","oxygen","pack","package","page","paid","pain","paint",
"pair","palace","pale","pan","paper","paragraph","parallel","parent",
"park","part","particles","particular","particularly","partly","parts","party",
"pass","passage","past","path","pattern","pay","peace","pen",
"pencil","people","per","percent","perfect","perfectly","perhaps","period",
"person","personal","pet","phrase","physical","piano","pick","picture",
"pictured","pie","piece","pig","pile","pilot","pine","pink",
"pipe","pitch","place","plain","plan","plane","planet","planned",
"planning","plant","plastic","plate","plates","play","pleasant","please",
"pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
"point","pole","police","policeman","political","pond","pony","pool",
"poor","popular","population","porch","port","position","positive","possible",
"possibly","post","pot","potatoes","pound","pour","powder","power",
"powerful","practical","practise","prepare","present","president","press","pressure",
"pretty","prevent","previous","price","pride","primitive","principal","principle",
"printed","private","prise","probably","problem","process","produce","product",
"production","programme","progress","promised","proper","properly","property","protection",
"proud","prove","provide","public","pull","pupil","pure","purple",
"purpose","push","put","putting","quarter","queen","question","quick",
"quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
"rain","raise","ran","ranch","range","rapidly","rate","rather",
"raw","rays","reach","read","reader","ready","real","realise",
"rear","reason","recall","receive","recent","recently","recognise","record",
"red","refer","refused","region","regular","related","relationship","religious",
"remain","remarkable","remember","remove","repeat","replace","replied","report",
"represent","require","research","respect","rest","result","return","review",
"rhyme","rhythm","rice","rich","ride","riding","right","ring",
"rise","rising","river","road","roar","rock","rocket","rocky",
"rod","roll","roof","room","root","rope","rose","rough",
"round","route","row","rubbed","rubber","rule","ruler","run",
"running","rush","sad","saddle","safe","safety","said","sail",
"sale","salmon","salt","same","sand","sang","sat","satellites",
"satisfied","save","saved","saw","say","scale","scared","scene",
"school","science","scientific","scientist","score","screen","sea","search",
"season","seat","second","secret","section","see","saeed","seeing",
"seems","seen","seldom","select","selection","sell","send","sense",
"sent","sentence","separate","series","serious","serve","service","sets",
"setting","settle","settlers","seven","several","shade","shadow","shake",
"shaking","shall","shallow","shape","share","sharp","she","sheep",
"sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
"shoe","shoot","shop","shore","short","shorter","shot","should",
"shoulder","shout","show","shown","shut","sick","sides","sight",
"sign","signal","silence","silent","silk","silly","silver","similar",
"simple","simplest","simply","since","sing","single","sink","sister",
"sit","sitting","situation","six","size","skill","skin","sky",
"slabs","slave","sleep","slept","slide","slight","slightly","slip",
"slipped","slope","slow","slowly","small","smaller","smallest","smell",
"smile","smoke","smooth","snake","snow","so","soap","social",
"society","soft","softly","soil","solar","sold","soldier","solid",
"solution","solve","some","somebody","somehow","someone","something","sometime",
"somewhere","son","song","soon","sort","sound","source","south",
"southern","space","speak","special","species","specific","speech","speed",
"spell","spend","spent","spider","spin","spirit","spite","split",
"spoken","sport","spread","spring","square","stage","stairs","stand",
"standard","star","stared","start","state","statement","station","stay",
"steady","steam","steel","steep","stems","step","stepped","stick",
"stiff","still","stock","stomach","stone","stood","stop","stopped",
"store","storm","storey","stove","straight","strange","stranger","straw",
"stream","street","strength","stretch","strike","string","strip","strong",
"stronger","struck","structure","struggle","stuck","student","studied","studying",
"subject","substance","success","successful","such","sudden","suddenly","sugar",
"suggest","suit","sum","summer","sun","sunlight","supper","supply",
"support","suppose","sure","surface","surprise","surrounded","swam","sweet",
"swept","swim","swimming","swing","swung","syllable","symbol","system",
"table","tail","take","taken","tales","talk","tall","tank",
"tape","task","taste","taught","tax","tea","teach","teacher",
"team","tears","teeth","telephone","television","tell","temperature","ten",
"tent","term","terrible","test","than","thank","that","thee",
"them","themselves","then","theory","there","therefore","these","they",
"thick","thin","thing","think","third","thirty","this","those",
"thou","though","thought","thousand","thread","three","threw","throat",
"through","throughout","throw","thrown","thumb","thus","thy","tide",
"tie","tight","tightly","till","time","tin","tiny","tip",
"tyred","title","to","tobacco","today","together","told","tomorrow",
"tone","tongue","tonight","too","took","tool","top","topic",
"torn","total","touch","toward","tower","town","toy","trace",
"track","trade","traffic","trail","train","transportation","trap","travel",
"treated","tree","triangle","tribe","trick","tried","trip","troops",
"tropical","trouble","truck","trunk","truth","try","tube","tune",
"turn","twelve","twenty","twice","two","type","typical","uncle",
"under","underline","understanding","unhappy","union","unit","universe","unknown",
"unless","until","unusual","up","upon","upper","upward","us",
"use","useful","using","usual","usually","valley","valuable","value",
"vapour","variety","various","vast","vegetable","verb","vertical","very",
"vessels","victory","view","village","visit","visitor","voice","volume",
"vote","vowel","voyage","waggon","wait","walk","wall","want",
"war","warm","warn","was","wash","waste","watch","water",
"wave","way","we","weak","wealth","wear","weather","week",
"weigh","weight","welcome","well","went","were","west","western",
"wet","whale","what","whatever","wheat","wheel","when","whenever",
"where","wherever","whether","which","while","whispered","whistle","white",
"who","whole","whom","whose","why","wide","widely","wife",
"wild","will","willing","win","wind","window","wing","winter",
"wire","wise","wish","with","within","without","wolf","women",
"won","wonder","wonderful","wood","wooden","wool","word","wore",
"work","worker","world","worried","worry","worse","worth","would",
"wrapped","write","writer","writing","written","wrong","wrote","yard",
"year","yellow","yes","yesterday","yet","you","young","younger",
"your","yourself","youth","zero","zebra","zipper","zoo","zulu"
];

String.prototype.toSentenceCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// Knuth-Fisher-Yates Shuffle
// http://bost.ocks.org/mike/shuffle/

function shuffle(array) {
  let m = array.length,
      t,
      i; // While there remain elements to shuffle…

  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--); // And swap it with the current element.

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
} // Add words to word-section


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

async function checkName(name) {
  if(name.split(" ")[0] == "" || name.split(" ")[1] == "") { return false; }
  let response = await fetch(window.location.protocol + "//" + window.location.hostname + ":3000/get");

  if (response.status !== 200) {
    loginError("Looks like there was a problem.<br>Status Code: " + response.status);
    return false;
  }

  let data = await response.json();
  let found = false;
  data.forEach(entry => {
    if(entry.name == name) { found = true; }
  });

  if(found) {
    loginError("That name is already taken.");
    return false;
  }

  if(data != undefined) { return true; } else { return false; }
}

function loginError(message) {
  $(".error-msg").remove();
  $("#login-prompt").append('<p class="error-msg" style="color: red; font-size: 9pt;">' + message + '</p>').show();
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

  let name = getCookie("username");
  if(name == "" || name == undefined) { return false; }
  fetch(window.location.protocol + "//" + window.location.hostname + ":3000/update?name=" + name + "&wpm=" + wpm + "&cpm=" + typed);
}

if(getCookie("username")) {
  $("#login-prompt").parent().remove();
  $(".blurred").css({ "filter" : "none", "opacity" : "1", "pointer-events" : "auto" });
}
