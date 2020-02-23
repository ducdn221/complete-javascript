/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, winningScore;
init();

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

var elePlayer1 = document.querySelector(".player-0-panel");
var elePlayer2 = document.querySelector(".player-1-panel");

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (!gamePlaying) {
    return;
  }

  // 1. randoom a number;
  var dice = Math.floor(Math.random() * 6) + 1;
  //2. Display result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = 'block';
  diceDOM.src = "dice-" + dice + ".png";
  // 3. get winning score
  var winningScoreDOM = document.querySelector('.winning-score__input');
  // console.log(winningScoreDOM.value);
  if (winningScoreDOM.value && winningScore !== winningScoreDOM) {
    winningScore = document.querySelector('.winning-score__input').value;
  }

  if (!winningScoreDOM.value) {
    winningScore = 100;
  }

  if (dice === 1) {
    changePlayer();
    return;
  }
 
  roundScore += dice;
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
});

document.querySelector('.btn-hold').addEventListener("click", function () {
  if (!gamePlaying) {
    return;
  }

  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

  if (scores[activePlayer] >= winningScore) {
    gamePlaying = false;
    document.querySelector("#name-" + activePlayer).textContent = 'Winner';
    document.querySelector(".dice").style.display = 'none';
    document.querySelector(".player-" + activePlayer + '-panel').classList.add('winner');
    document.querySelector(".player-" + activePlayer + '-panel').classList.remove('active');
    return;
  }

  // document.querySelector("#current-"+ activePlayer).textContent = 0;

  changePlayer();
})

document.querySelector('.btn-new').addEventListener("click", init);

function init() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  winningScore = 100;

  document.querySelector('.dice').style.display = 'none';
  
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.winning-score__input').value = "";
  document.querySelector("#name-0").textContent = 'Player 1';
  document.querySelector("#name-1").textContent = 'Player 2';

  document.querySelector(".player-0-panel").classList.remove('winner');
  document.querySelector(".player-1-panel").classList.remove('winner');
  document.querySelector(".player-0-panel").classList.remove('active');
  document.querySelector(".player-1-panel").classList.remove('active');
  document.querySelector(".player-0-panel").classList.add('active');
}

function changePlayer() {
  roundScore = 0;
  elePlayer1.classList.toggle("active");
  elePlayer2.classList.toggle("active");

  document.querySelector("#current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(".dice").style.display = 'none';

}






// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' +activePlayer).innerHTML = '<em>'+ dice + '</em>';
// var x = document.querySelector("#score-0").textContent















var treeArr = [
  {
    id: "1",
    name: "book",
    children: [
      { id: "1a", name: "English" },
      { id: "1b", name: "Math" }
    ]
  },
  {
    id: "2",
    name: "clother",
    children: [
      { id: "2a", name: "t-shirt" },
      { id: "2b", name: "jean" }
    ]
  }
];

var flatTree = [
  {
    parentId: null,
    id: "1",
    name: "book"
  },
  {
    parentId: "1",
    id: "1a",
    name: "English"
  }
];

function convert(treeArr, parentId) {
  let arrResult = [];
  for (let index = 0; index < treeArr.length; index++) {
    arrResult.push(removeChildren(treeArr[index], parentId));
    if (treeArr[index].children && treeArr[index].children.length) {
      arrResult = arrResult.concat(
        convert(treeArr[index].children, treeArr[index].id)
      );
    }
  }
  return arrResult;
}

function removeChildren(obj, parentId) {
  let result = { ...obj };
  result.parentId = parentId ? parentId : null;
  delete result.children;
  return result;
}

convert(treeArr);
