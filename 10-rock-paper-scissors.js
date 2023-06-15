let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
} ;

updateScoreElem();
// if(!score){
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     } 
// }


function playGame(playerMove){
    const computerMove = pickComputerMove();
    console.log(computerMove);

                    let resault = '';
                    if(playerMove === 'scissors'){
                        if (computerMove === 'rock'){
                            resault = 'You lose.'
                        } else if (computerMove === 'paper'){
                            resault = 'You win.'
                        }else if (computerMove === 'scissors'){
                            resault = 'Tie.';
                        }

                    } else if (playerMove === 'paper'){
                        if (computerMove === 'rock'){
                            resault = 'You win.'
                        } else if (computerMove === 'paper'){
                            resault = 'Tie.'
                        }else if (computerMove === 'scissors'){
                            resault = 'You lose.';
                        }

                    } else if (playerMove === 'rock'){
                        if (computerMove === 'rock'){
                            resault = 'Tie.'
                        } else if (computerMove === 'paper'){
                            resault = 'You lose.'
                        }else if (computerMove === 'scissors'){
                            resault = 'You win.';
                        }
                    }

                    if (resault === 'You win.'){
                        score.wins += 1;
                    }else if (resault === 'You lose.'){
                        score.losses += 1;
                    } else if (resault === 'Tie.'){
                        score.ties += 1;
                    }  

                    localStorage.setItem('score', JSON.stringify(score));
                    
                    updateScoreElem();


//                 alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${resault}
// Wins : ${score.wins}.Losses : ${score.losses}.Ties : ${score.ties}.`);
document.querySelector('.js-resault').innerHTML = `${resault}`;
document.querySelector('.js-moves').innerHTML = `
You picked
<img class="move-icons" src="./images/${playerMove}-emoji.png" alt="">
<img class="move-icons" src="./images/${computerMove}-emoji.png" alt="">
Computer picked`;
    }
    function updateScoreElem(){
        document.querySelector('.js-score').innerHTML = 
`Wins : ${score.wins}.Losses : ${score.losses}.Ties : ${score.ties}.`; 
    }
    function pickComputerMove () {
        const randomNumber = Math.random();

        let computerMove ='';

            if (randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            } else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors' ;
            }

            return computerMove;
    }
