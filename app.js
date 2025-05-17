let user_Score=0;
let comp_Score=0;

const choices = document.querySelectorAll(".choice");
// console.log(choices);
const msg = document.querySelector("#msg");
// console.log(msg);
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options = ["paper","rock","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw./Play Again!";
    msg.style.backgroundColor="#081b31";
    
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_Score++;
        userScorePara.innerText=user_Score;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        // console.log(`You Win ! Your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
        
    }
    else{
        comp_Score++;
        compScorePara.innerText=comp_Score;
        msg.innerText=`You Lose ! ${userChoice} beats your ${compChoice}`;
        // console.log(`You Lose ! ${userChoice} beats  your ${compChoice}`);
        msg.style.backgroundColor="red";
    }    
}

const playGame =(userChoice)=>{
    console.log("User Choice = " , userChoice);
    //Generate computer choice->modular
    const compChoice=genCompChoice();
    console.log("Computer Choice = " , compChoice);
    if(userChoice===compChoice){
        drawGame(); //drawGame
    }
    else{
        let userWin=true;
        if(compChoice==="rock"){
            //Computer options -> paper,scissors
            userWin=userChoice==="paper"?false:true;
        }
        else if(compChoice==="paper"){
            //Computer options -> rock,scissors
            userWin=userChoice==="scissors"?false:true;
        }
        else{
            //userChoice -> scissors
            //Computer Options ->rock,paper
            userWin=userChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        // console.log("Choice Was Clicked!",userChoice);
        playGame(userChoice);  
    })
})

