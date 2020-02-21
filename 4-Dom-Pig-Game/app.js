/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' +activePlayer).innerHTML = '<em>'+ dice + '</em>';
// var x = document.querySelector("#score-0").textContent;

var elePlayer1 = document.getElementById("player-0");

var elePlayer2 = document.getElementById("player-1");
document.querySelector(".btn-roll").addEventListener("click", function() {
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").src = "dice-" + dice + ".png";
  var currentResult = document.querySelector("#current-" + activePlayer).textContent;

  if (dice === 1) {
    document.querySelector("#current-" + activePlayer).textContent = 0;
    if(activePlayer === 0) {
        elePlayer1.classList.remove("active");
        elePlayer2.classList.add("active");
        activePlayer = 1;
        return;
    }
    elePlayer1.classList.add("active");
    elePlayer2.classList.remove("active");
    activePlayer = 0;
    return;
  }
  console.log(currentResult);
  document.querySelector("#current-" + activePlayer).textContent = parseInt(currentResult) + dice;
});

document.querySelector('.btn-hold').addEventListener("click", function() {
    if(activePlayer ===0) {
        scores[activePlayer] = scores[activePlayer] + parseInt(document.querySelector("#current-" + activePlayer).textContent);
        if(scores[activePlayer] === 100){
            return;
        }
        document.querySelector("#current-" + activePlayer).textContent
        return; 
    }

})
























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
