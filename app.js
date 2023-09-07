let colors = ["yellow", "orange", "purple", "green"];

let level = 0;
let start = 0;

let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector('h2');

function randomColor(){
    return Math.floor(Math.random()*4);
}

let body = document.querySelector('body');
let startBtn = document.querySelector('#start');
document.addEventListener("keypress", ()=>{
    if(start == 0){
        start = 1;
        levelUp();
    }

});

startBtn.addEventListener("click", ()=>{
    if(start == 0){
        start = 1;
        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    }, 180);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;

    let rand = randomColor();
    let randColor = colors[rand];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(rand);
    // console.log(randColor);
    // console.log(randbtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(()=>{
                levelUp()
            }, 250);
        } else{
            h2.innerText = `👀 hmm go on....`;
        }
    }else{
        h2.innerText = `Oops! Game Over. Your Score: ${level}. Press any key to start!`;
        start = 0;
        level = 0;
        gameSeq = [];
        body.setAttribute("class", "bg-danger");
        setTimeout(()=>{
            body.setAttribute("class", "bg-dark");
        }, 150);
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let color = btn.getAttribute("id");
    userSeq.push(color);
    console.log(userSeq); 

    checkAns(userSeq.length-1);

}

let boxes = document.querySelectorAll(".box");
for(box of boxes){
    box.addEventListener("click", btnPress  );
}