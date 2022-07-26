const comp=document.querySelector("#computer-choice");
const your=document.querySelector("#your-choice");
const result=document.querySelector("#result");
const choices=document.querySelectorAll("bottom");
const winner=document.querySelector("#win");
const loser=document.querySelector("#lost");
winner.innerHTML=0;
loser.innerHTML=0;
let userchoice
let computerchoice
let flag
let win=0
let loss=0
function sccor(){
    if(flag===0){
        win++;
        winner.innerHTML=win;
    }
    if(flag==1){
        loss++
        loser.innerHTML=loss;
    }
}

function choiceGenerator(){
     let random=Math.floor(Math.random()*3+1);
    
    if(random === 1){
        computerchoice="rock"
        comp.innerHTML=computerchoice;

    }
    if(random === 2){
        computerchoice="paper"
        comp.innerHTML=computerchoice;
        
    }
    if(random === 3){
        computerchoice="scissor"
        comp.innerHTML=computerchoice;
        
    }
    
}
function getresult(){
    if(userchoice===computerchoice){
        result.innerHTML="draw, try again"
    }
    else if(
        (userchoice==="rock" && computerchoice==="scissor") ||
        (userchoice==="scissor" && computerchoice==="paper") ||
        (userchoice==="paper" && computerchoice==="rock") 
    ){
        result.innerHTML="you won lucky basterd"
        flag=0;
    }
    
    else{
        result.innerHTML="you lost dumnbass"
        flag=1;
    }
    }

choices.forEach(choice => choice.addEventListener('click',(e)=>{
    userchoice=e.target.id;
    your.innerHTML= userchoice;
    choiceGenerator();
    getresult();
    sccor()
    }))



// const comp=document.querySelector("#computer-choice")
// console.log(comp);
// const add=document.createElement("span");
// const content=document.createTextNode("replaced")
// add.appendChild(content)
// //document.body.replaceChild(add,comp);
// comp.appendChild(add);
// console.log(comp)

