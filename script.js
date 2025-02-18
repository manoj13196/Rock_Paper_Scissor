// function getComputerChoice()
// {
//     let select=Math.random();
//     let move='';

//     if(select>=0 && select<1/3)
//     {
//         move='rock';
//     }
//     else if(select>=1/3 && select<2/3)
//     {
//         move='paper';
//     }
//     else if(select>=2/3 && select<=1)
//     {
//         move='scissor';
//     }
//     return move.toLowerCase();
// }

// console.log(getComputerChoice());

// function getHumanChoice()
// {
//     let choice=prompt("Enter string rock or paper or scissor");
//     return choice.toLowerCase();
// }
// // console.log(getHumanChoice());

// let computer_score=0;
// let human_score=0;
// let tie=0;

// function playRound(humanchoice,computerchoice)
// {
//     if(humanchoice===computerchoice)
//     {
//         console.log(`Its a Tie!${humanchoice} cant beat ${computerchoice}`);
//         tie+=1;
//     }
//     else if(humanchoice==='rock' && computerchoice==='scissor' || humanchoice==='paper' && computerchoice==='rock' || humanchoice==='scissor'&&computerchoice==='paper')
//     {
//         console.log(`hurray you Won! ${humanchoice} beats ${computerchoice}`);
//         human_score+=1;
//     }
//     else{
//         console.log(`sorry you Lost! ${computerchoice} beats ${humanchoice}`);
//         computer_score+=1;
//     }

//     console.log(`you won ${human_score}  computer won ${computer_score}  tie's ${tie}`);
// }

// const computerselection=getComputerChoice();

// let gamecount=5;
// let i=1;
// function playGame(i,gamecount)
// {
//     while(i<=gamecount)
//     {
//         const humanselection=getHumanChoice();
//         playRound(humanselection,computerselection);
//         i++;
//     }
// }
// playGame(i,gamecount);


function getComputerChoice()
{
    let select=Math.random();
    let move="";

    if(select>=0&&select<1/3)
    {
        move="rock";
    }
    else if(select>=1/3&&select<2/3)
    {
        move="paper";
    }
    else if(select>=2/3&& select<=1)
    {
        move="scissor";
    }
    return move.toLowerCase();
}



let rock_btn=document.querySelector("#rock");
let paper_btn=document.querySelector("#paper");
let scissor_btn=document.querySelector("#scissor");

let chances=5;

rock_btn.addEventListener("click",function(){
    
    if(chances>0)
    {
        setHumanChoice("rock");
        chances-=1;
        updateChances()
        playGame();
        win_loss()
    }
    else
    {
        checkGameOver()
    }
})
paper_btn.addEventListener("click",function(){
   if(chances>0)
   {
        setHumanChoice("paper");
        chances-=1;
        updateChances()
        playGame();
        win_loss()
   }
   else
    {
        checkGameOver()
    }
})
scissor_btn.addEventListener("click",function(){
    if(chances>0)
    {
        setHumanChoice("scissor");
        chances-=1;
        updateChances()
        playGame();
        win_loss()
    }
    else
    {
        checkGameOver()
    }
})

let humanChoice="";
function setHumanChoice(choice)
{
    humanChoice=choice;
    
}

let win=0;
let loose=0;
let tie=0;

let result="";
function playGame()
{
    const computerChoice=getComputerChoice();
    if(humanChoice===computerChoice)
        {
            result="tie";
            tie+=1;
        }
    else if((humanChoice==="rock"&&computerChoice==="scissor")||
        (humanChoice==="scissor"&&computerChoice==="paper")||
        (humanChoice==="paper"&&computerChoice==="rock"))
     {
            result="win";
            win+=1;
    }
    else{
            result="loose";
            loose+=1;
    }
    document.getElementById("win_count").innerText=`wins : ${win}`;
    document.getElementById("loose_count").innerText=`loose : ${loose}`;
    document.getElementById("tie_count").innerText=`ties : ${tie}`;  
}
function updateChances()
{
    document.getElementById("chances_left").innerText=`Chances left : ${chances}`;
}

function checkGameOver()
{
    if(chances===0)
    {
        alert("Game Over!");
    }
}
function win_loss()
{
    if(chances===0)
    {
        if(win>loose)
        {
          document.getElementById("winlose_text").innerText=`Hurray! you won!`;   
        }
        else if(win<loose)
        {
            document.getElementById("winlose_text").innerText=`Sorry you lost!`;
        }
        else
        {
            document.getElementById("winlose_text").innerText=`shut it's a Tie.`;
        }
    }
   
}

let reset_Btn=document.querySelector("#reset_btn");
reset_Btn.addEventListener("click",function()
{
    resetGame();
});

function resetGame()
{
    win=0;
    loose=0;
    tie=0;
    chances=5;
    humanChoice="";
    result="";

    document.getElementById("win_count").innerText=`wins : ${win}`;
    document.getElementById("loose_count").innerText=`loose : ${loose}`;
    document.getElementById("tie_count").innerText=`ties : ${tie}`;  
    document.getElementById("chances_left").innerText=`Chances left : ${chances}`;
    document.getElementById("winlose_text").innerText="";

}









