let ComputerChoice;
let UserChoice;
let result;

//  THIS IS AN  FUNCTION FOR BAT

function RandomnumberGenrste() {
  let Randomnumber = Math.random() * 3;
  if (Randomnumber > 0 && Randomnumber <= 1) {
    ComputerChoice = "Bat";
  } else if (Randomnumber > 1 && Randomnumber <= 2) {
    ComputerChoice = "Ball";
  } else {
    ComputerChoice = "Stump";
  }
}


 let scoreStr=localStorage.getItem('Score');
 let score;

 resetScore(scoreStr);

 function resetScore(scoreStr){
  score=scoreStr?JSON.parse(scoreStr):{
      win: 0,
      lost: 0,
      tie: 0,   
    }

    score.DisplayScore= function () { 
      return ` Won:${score.win} ,Lost:${score.lost},Tie:${score.tie}`;
     
    };
   }
 






//  THIS  IS AN  METHOD FOR  ALERTING ON THE  SCREEN MESSAGE
function Alerting(UserChoice, ComputerChoice, result) {
localStorage.setItem('Score',JSON.stringify(score));
document.getElementById('User_move').innerText= UserChoice!=undefined?`You have Choose  ${UserChoice}`:'';
document.getElementById('Computer_move').innerText= ComputerChoice!=undefined?`Computer Choose  ${ComputerChoice}`:''
document.getElementById('result').innerText=result!=undefined?`${result}`:''
document.getElementById('Score').innerText=` ${score.DisplayScore()}`

}

function storageClr(){

  // alert("Are you sure reset  game")
    
  localStorage.clear();

   resetScore();
   Alerting();

}

//   THIS IS AN METHOD IF USER CHOOSE BAT
function BatFunction() {
  UserChoice = "Bat";
  RandomnumberGenrste();

  if (ComputerChoice === "Bat") {
    result = "This is an tie Match";
    score.tie++;
  } else if (ComputerChoice === "Ball") {
    result = "You have   won the match";
    score.win++;
  } else if (ComputerChoice === "Stump") {
    result = "You  have loss the match ";
    score.lost++;
  }
  Alerting(UserChoice, ComputerChoice, result);
}

//   THIS IS AN METHOD  IF USER CHOSE BALL

function BallFunction() {
  UserChoice = "Ball";
  RandomnumberGenrste();

  if (ComputerChoice === "Ball") {
    result = "This is an tie Match";
    score.tie++;
  } else if (ComputerChoice === "Stump") {
    result = " You have Won The Match";
    score.win++;
  } else if (ComputerChoice === "Bat") {
    result = "You have loss the match ";
    score.lost++;
  }
  Alerting(UserChoice, ComputerChoice, result);
}

//   THIS IS AN METHOD FOR IF USER CHOOSE STUMP
function StumpFunction() {
  UserChoice = "Stump";

  RandomnumberGenrste();

  if (ComputerChoice === "Stump") {
    result = "This is an tie Match";
    score.tie++;
  } else if (ComputerChoice === "Bat") {
    result = "You have  Won The Match";
    score.win++;
  } else if (ComputerChoice === "Ball") {
    result = "YOu have  lost the match ";
    score.lost++;
  }
  Alerting(UserChoice, ComputerChoice, result);
}
