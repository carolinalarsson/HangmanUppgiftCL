/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

TO DO IN THIS PROJECT


1. olika ord ska finnas som man ska uppnå genom att klicka på olika bokstäver
2. när man klickar på en bokstav på tagnentborden så ska den sparas
3. om man klickar på rätt bokstav ska den synas i ordet _ _ _ _
4. om man klickar på fel bokstav ska en del av gubben synas (5 försök!!!!! max)
5. vid vinst på max 5 försök visas du vann!
6. vid förlust ska man kunna spela igen och då ska spelet returneras till så som det var på start.

KRITERIER!
1. Du ska bygga det klassiska spelet hänga gubbe.
2. Det ska vara gjort med HTML/CSS/Javascript
3. Användaren ska kunna mata in med tangentbordet bokstäver
4. Användaren ska kunna se vilka bokstäver den gissar rätt på och var i ordet de
hamnar
5. Vid varje fel ska en del av gubben visas
6. Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en
fråga om man vill spela igen,
7. Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med
det rätta ordet och en fråga om man vill spela igen.
8. Du ska enbart kunna gissa på en bokstav i taget.
 

 
// MIN FÖRSTA KODNING SOM VAR HÅRDKODAD KOLLA EJ PÅ DENNA =)
let correctWord = 'kex';
let showLetter = document.querySelector('.showPressedButton');
let showLetter2 = document.querySelector('.showPressedButton2');
let showLetter3 = document.querySelector('.showPressedButton3');

window.addEventListener('keyup', function(event) {
var pressedButton = event.key;
if (pressedButton === 'k') {
    showLetter.innerHTML = pressedButton;
} else if (pressedButton === 'e') {
    showLetter2.innerHTML = pressedButton;
} else if (pressedButton === 'x') {
    showLetter3.innerHTML = pressedButton;
} else {
    document.querySelector('figure').classList.add('scaffold');
    if (document.querySelector('figure').classList.contains('scaffold')) = true {
        document.querySelector('figure').classList.add('head')
    }
}
});

var x = document.querySelector('#scaffold');

x.addEventListener('click', function(event) {
    console.log('Du klickade på: ', event.target);
});

*/

//deklaration av ett random ord
let wordList = ['kex', 'kaka', 'chips', 'godis', 'dipp', 'coke', 'fanta'];
let correctWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(correctWord);

// dela upp random ord i till array och deklaration av random ords längd och byt ut till _ som sparas i filledArray + gissningssvariabel
let splitWord = correctWord.split("");
console.log(splitWord);
let filledArray = new Array(splitWord.length).fill('_');
console.log(filledArray);

let numOfGuesses = 0;




// function för timer som startas när du klickar på startknappen
var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     if (confirm('LOSER!!!!!!!!!!!!!!!! you lost try again?')) {
        window.location.reload()
    }
  }
}

document.getElementById("timer").innerHTML="1:00"; 


// START !!! function när jag klickar på start knappen så skriver den ut filledArray samt startar min tidsnedräknare
document.querySelector('#start').addEventListener('click', function () {
    document.querySelector('#numbers-list').innerHTML = '';
    let shower = document.createElement('p');

    shower.innerHTML = filledArray;

    document.querySelector('#numbers-list').append(shower);
    document.querySelector('#start').style.display = "none";

    if(!timer) {
        timer = window.setInterval(function() { 
          myFunction();
        }, 1000); // every second
      }
});


// functionen när du klickar på en knapp på tagnentbordet
window.addEventListener('keyup', function (event) {
    var pressedButton = event.key;

    if (splitWord.indexOf(pressedButton) !== -1) {
        for (let i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === pressedButton) {

                console.log('Du hittade: ', splitWord[i]);

                filledArray[i] = splitWord[i];
            }
        }
        winner();
    } else {
        console.log('Bokstaven finns inte i ordet');
        numOfGuesses = numOfGuesses + 1;
        addParts();
    }
    document.querySelector('#numbers-list').innerHTML = '';
    let shower = document.createElement('p');
    shower.innerHTML = filledArray;
    document.querySelector('#numbers-list').append(shower);
});


//Function för att vinna. Har en timeout för att användaren ska se att sista bokstaven var rätt innan alerten kommer upp
function winner() {
    if (filledArray.indexOf('_') == -1) {
        //resetGame();
        setTimeout(function () {
            if (confirm('WINNER!!!!!!!!!!!!!! you won try again?')) {
                window.location.reload()
            }
        }, 300);
    }
}

//function för att lägga till kroppsdelar när du klickar på fel tagnent
function addParts() {
    if (numOfGuesses == 1) {
        document.querySelector('figure').classList.add('scaffold');
    } else if (numOfGuesses == 2) {
        document.querySelector('figure').classList.add('head');
    } else if (numOfGuesses == 3) {
        document.querySelector('figure').classList.add('body');
    } else if (numOfGuesses == 4) {
        document.querySelector('figure').classList.add('arms');
    } else if (numOfGuesses == 5) {
        document.querySelector('figure').classList.add('legs');
        
        if (confirm('LOSER!!!!!!!!!!!!!!!! you lost try again?')) {
            window.location.reload()
        }
    }
};


