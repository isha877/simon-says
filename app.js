let gameSeq = [];
let userSeq = [];
let btns = ["pink","orange","green","blue"];
let highestScore = 0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

//white color
function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
}, 250);
}
//green color
function userflash(btn){
 btn.classList.add("userflash");
 setTimeout(function(){
   btn.classList.remove("userflash");
 }, 250);
 }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random()*3)
   let randCol = btns[randIdx];
   let randBtn = document.querySelector(`.${randCol}`);
   gameSeq.push(randCol);
   console.log(gameSeq);

   gameflash(randBtn);
}

function checkAns(ind){

    if(userSeq[ind] === gameSeq[ind]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
      } 
    }
    else{
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
      }, 150)

      if(level > highestScore)
      { 
        highestScore = level;
        h2.innerHTML = `Highest Score :<b> ${level} </b>🏆🥇🥳👏🏻 <br> Press any key to start`;
      }
      else{
        h2.innerHTML = `Game Over ! Press any key to start YOUR SCORE : ${level}`;
      }
      reset();
    }
}

function btnPress(){
   let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
 }