const boxes = document.querySelectorAll(".box");
const boxContainer = document.querySelector(".box-container");
const emptyBox = document.getElementById("box33");
const randomButton = document.getElementById("randomButton");
const scoreOnTop = document.getElementById("scoreOnTop");


let boxesArray = 
[ [boxes[0], boxes[1], boxes[2], boxes[3]],
  [boxes[4], boxes[5], boxes[6], boxes[7]],
  [boxes[8], boxes[9], boxes[10], boxes[11]],
  [boxes[12], boxes[13], boxes[14], boxes[15]] ];

let randomBoxesArray = [[,,,], [,,,], [,,,], [,,,]]
let perfectArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",""]
let toCompareArray = [];
let counter = 0;

document.getElementById("scoreOnTop").innerHTML = counter;

 //GAME OVER
 function compare(){
    toCompareArray = [];
    randomBoxesArray.forEach((row, rowIndex)=>{
        randomBoxesArray.forEach((column, columnIndex)=>{
            toCompareArray.push(randomBoxesArray[rowIndex][columnIndex].innerHTML)
        })
    })
    function isWin(){
          for(let k = 0; k < perfectArray.length; k++){
            if(perfectArray[k] !== toCompareArray[k])
              return false
            }
          alert("YOU WON, CONGRATULATIONS")
          console.log("YOU WON, CONGRATULATIONS")
      }
      isWin()
}

//Keep creating random positions until 4x4 grid is full
function createRandomGame(){
    boxesArray.forEach((row, rowIndex)=>{
        boxesArray.forEach((column, columnIndex)=>{
            function putInRandom(){
                    var randomX = Math.floor(Math.random()*4)
                    var randomY = Math.floor(Math.random()*4)
                if(randomBoxesArray[randomX][randomY] == undefined){
                    boxesArray[rowIndex][columnIndex].style['top'] = '100' * randomX +"px"
                    boxesArray[rowIndex][columnIndex].style['left'] = '100' * randomY +"px"
                    randomBoxesArray[randomX][randomY] = boxesArray[rowIndex][columnIndex]
                }else{
                    putInRandom();
                }
            }
            putInRandom();
        })
    })
}

createRandomGame();
console.log("Random array:");
console.log(randomBoxesArray);

// Random button handler
randomButton.addEventListener("click",() => {
    randomBoxesArray = [[,,,], [,,,], [,,,], [,,,]]
    counter = 0;

    createRandomGame();
    document.getElementById("scoreOnTop").innerHTML = counter;
    console.clear()
    console.log("Random array:");
    console.log(randomBoxesArray);
})


let clickedX, clickedY, emptyX, emptyY ;
boxContainer.addEventListener("click", (e) => {
    randomBoxesArray.forEach((row, rowIndex)=>{
        randomBoxesArray.forEach((column, columnIndex)=>{
            //Get position of empty element
            if(randomBoxesArray[rowIndex][columnIndex].textContent === ""){
                emptyX = rowIndex;
                emptyY = columnIndex;
                console.log("Empty box before switch at: " + emptyX,  emptyY);
            }
            //Get position of clicked element
            if(e.target === randomBoxesArray[rowIndex][columnIndex]){
               clickedX = rowIndex;
                clickedY = columnIndex;
                console.log("Clicked: " + clickedX, clickedY); 
            }
        })
    })

    //SWITCHING ELEMENTS separetly in Y and X axis
    let diffX;
    let diffY;
    
    if(clickedY === emptyY && clickedX !== emptyX){
        
        diffX =  clickedX - emptyX;   
        console.log("DifferenceX: " + diffX);

        if(diffX == 1 || diffX == -1){
            console.log("switch vertically");
            counter++;
            document.getElementById("scoreOnTop").innerHTML = counter;
            console.log("Moves: " + counter);

            let tempTop = randomBoxesArray[emptyX][emptyY].style['top'];
            randomBoxesArray[emptyX][emptyY].style['top'] = randomBoxesArray[clickedX][clickedY].style['top']
            randomBoxesArray[clickedX][clickedY].style['top'] = tempTop;

            let tempArr = randomBoxesArray[emptyX][emptyY];
            randomBoxesArray[emptyX][emptyY] = randomBoxesArray[clickedX][clickedY];
            randomBoxesArray[clickedX][clickedY] = tempArr;

            compare()
            console.log(randomBoxesArray);
            console.log("----------------------");
        }
        

    }
    else if(clickedX === emptyX && clickedY !== emptyY){
        diffY =  clickedY - emptyY;  
        console.log("DifferenceY: " + diffY);
        
        if(diffY == 1 || diffY == -1){
            console.log("switch horizontally");
            counter++;
            document.getElementById("scoreOnTop").innerHTML = counter;
            console.log("Moves: " + counter);

            let tempTop = randomBoxesArray[emptyX][emptyY].style['left'];
            randomBoxesArray[emptyX][emptyY].style['left'] = randomBoxesArray[clickedX][clickedY].style['left']
            randomBoxesArray[clickedX][clickedY].style['left'] = tempTop;

            let tempArr = randomBoxesArray[emptyX][emptyY];
            randomBoxesArray[emptyX][emptyY] = randomBoxesArray[clickedX][clickedY]
            randomBoxesArray[clickedX][clickedY] = tempArr;

            compare()
            console.log(randomBoxesArray);
            console.log("----------------------");
        }
    }
    else{
            console.log("can't switch");
            console.log("----------------------");
    }
})