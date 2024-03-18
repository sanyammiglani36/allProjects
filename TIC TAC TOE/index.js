const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const newGameButton = document.querySelector('.click-button');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

 // 1) creating a function to initialxse the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];

    //UI pr bhi empty krna padega
         boxes.forEach((box,index) => {
            box.innerText = "";
         boxes[index].style.pointerEvents = "all";
         box.classList = `box box${index+1}`;
     });
    newGameButton.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
};
 initGame();

 // 4). 
function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    } 
    //UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){

    let answer = "";
    winningPositions.forEach((position) => {
        // all 3 boxes should be non-empty and  exactly the same value
        if((gameGrid[position[0]] != ""  || gameGrid[position[1]] != "" || gameGrid[position[2]] !="") && (gameGrid[position[0]] === gameGrid[position[1]]) && gameGrid[position[1]] === gameGrid[position[2]]){

            //check if winnner is X
            if(gameGrid[position[0]] === "X"){
                answer = "X";
            }
            else{
                answer = "O";
            }

            //disable pointer event
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            //Now we know the winner of the game
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    })

// It means we find the winner

    if(answer !== ""){
        gameInfo.innerText = `Winner is - ${answer}`;
        newGameButton.classList.add("active"); 
       return;
     }

    //when there is no winner or tie 
    let fillCount = 0;
    gameGrid.forEach((box) =>{
        if(box !==""){
            fillCount++;
        }
    });

    // board is filled ,game is tie
    if(fillCount ===9){
        gameInfo.innerText = "Game Tied !";
        newGameButton.classList.add("active");
    }
 }

// 3).
function handleClick(index){
        //agar vo index empty hai too
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        ///swap karo turn ko
        swapTurn();
        //check koi jeet to nhi gya
        checkGameOver();
    }

}

// 2).
boxes.forEach((box,index) => {
    box.addEventListener('click',() => {
        handleClick(index);
    })
});

newGameButton.addEventListener("click",initGame);