function getComputerChoice()
{
    let select=Math.random();
    let move='';

    if(select>=0 && select<1/3)
    {
        move='rock';
    }
    else if(select>=1/3 && select<2/3)
    {
        move='paper';
    }
    else if(select>=2/3 && select<=1)
    {
        move='scissor';
    }
    return move.toLowerCase();
}

// console.log(getComputerChoice());

function getHumanChoice()
{
    let choice=prompt("Enter string rock or paper or scissor");
    return choice.toLowerCase();
}
// console.log(getHumanChoice());

let computer_score=0;
let human_score=0;
let tie=0;

function playRound(humanchoice,computerchoice)
{
    if(humanchoice===computerchoice)
    {
        console.log(`Its a Tie!${humanchoice} cant beat ${computerchoice}`);
        tie+=1;
    }
    else if(humanchoice==='rock' && computerchoice==='scissor' || humanchoice==='paper' && computerchoice==='rock' || humanchoice==='scissor'&&computerchoice==='paper')
    {
        console.log(`hurray you Won! ${humanchoice} beats ${computerchoice}`);
        human_score+=1;
    }
    else{
        console.log(`sorry you Lost! ${computerchoice} beats ${humanchoice}`);
        computer_score+=1;
    }

    console.log(`you won ${human_score}  computer won ${computer_score}  tie's ${tie}`);
}

const computerselection=getComputerChoice();

let gamecount=5;
let i=1;
function playGame(i,gamecount)
{
    while(i<=gamecount)
    {
        const humanselection=getHumanChoice();
        playRound(humanselection,computerselection);
        i++;
    }
}
playGame(i,gamecount);
