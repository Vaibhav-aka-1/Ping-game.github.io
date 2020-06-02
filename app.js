/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
alert(
    'Rolling dice 1, will remove your current score.\n'+
    'The player getting 25 score wins the match.\n'+
    'Press hold if you want to add Global Score.\n'+
    '********************************************************************* V.S.');

var scores,roundSore,activePlayer,gamePlay;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlay){
        //1. create a random number.
        var dice = Math.floor(Math.random()*6 + 1);

        //2. display Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        if(dice !== 1){
            roundSore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundSore;
        }
        else{
            nextPlayer();
        }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){
        scores[activePlayer] += roundSore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //nextPlayer();
        if(scores[activePlayer] >= 25){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlay = false;
        }
        else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0? activePlayer = 1:activePlayer = 0;
    roundSore = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
scores = [0,0];
activePlayer = 0;
roundSore = 0;
gamePlay = true;

document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}