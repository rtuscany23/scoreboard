let player1 = {
  name: 'Player',
  score: 0
}

let playerName = document.getElementById("playerCreate")
console.log(playerName)

function onePoint(){
 //console.log('test')
 player1.score += 1
 console.log(player1.score)
 document.getElementById("score").innerHTML = player1.score
}

function twoPoint(){
 //console.log('test')
 player1.score += 2
 console.log(player1.score)
 document.getElementById("score").innerHTML = player1.score
}

function threePoint(){
 //console.log('test')
 player1.score += 3
 console.log(player1.score)
 document.getElementById("score").innerHTML = player1.score
}

function sixPoint(){
 //console.log('test')
 player1.score += 6
 console.log(player1.score)
 document.getElementById("score").innerHTML = player1.score
}

function resetAll(){
 //console.log('test')
 player1.score = 0
 console.log(player1.score)
 document.getElementById("score").innerHTML = player1.score
}