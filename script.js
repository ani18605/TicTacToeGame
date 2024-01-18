let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameButton = document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const disableButton=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
};
const enableButton=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
    }
};
const showWinner =(Win)=>{
    msg.innerText='Congratulation ,winner is '+Win;
    msgContainer.classList.remove("hide");
    disableButton();
};
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText ="0";
            turn0=false;
        }else{
            box.innerText ="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const checkWinner =()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=null){
            if(pos1==pos2&&pos2==pos3){
                showWinner(pos1);
            }
        }
    }
};
const resetGame =()=>{
    turn0=true;
    enableButton();
    msgContainer.classList.add("hide");
};
newGameButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);