const boxes = document.querySelectorAll(".box");
const boxContainer = document.querySelector(".box-container");
const emptyBox = document.getElementById("box33");
const randomButton = document.getElementById("randomButton");
const scoreOnTop = document.getElementById("scoreOnTop");

//game
let boxesArray = 
[ [boxes[0], boxes[1], boxes[2], boxes[3]],
  [boxes[4], boxes[5], boxes[6], boxes[7]],
  [boxes[8], boxes[9], boxes[10], boxes[11]],
  [boxes[12], boxes[13], boxes[14], boxes[15]] ];

let randomBoxesArray = [[,,,], [,,,], [,,,], [,,,]]

let endArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",""]
let toCompareArray = [];
let counter = 0;

 document.getElementById("scoreOnTop").innerHTML = counter;

 function compare(){
    toCompareArray = [];
    randomBoxesArray.forEach((row, rowIndex)=>{
        randomBoxesArray.forEach((column, columnIndex)=>{
            toCompareArray.push(randomBoxesArray[rowIndex][columnIndex].innerHTML)
        })
    })
    function isWin(){
          for(let k = 0; k<endArray.length; k++){
            if(endArray[k] !== toCompareArray[k])
              return false
            }
          alert("YOU WON, CONGRATULATIONS")
          console.log("YOU WON, CONGRATULATIONS")
      }
      isWin()
}

 //Initial elements
 boxesArray.forEach((row, rowIndex)=>{
    boxesArray.forEach((column, columnIndex)=>{
        //Try randomly filling empty array until full 
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
console.log("Random array:");
console.log(randomBoxesArray);

// Random button handler
randomButton.addEventListener("click",() => {
    randomBoxesArray = [[,,,], [,,,], [,,,], [,,,]]
    counter = 0;
    document.getElementById("scoreOnTop").innerHTML = counter;

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
    console.clear()
    console.log("Random array:");
    console.log(randomBoxesArray);
})


let clickedX, clickedY, emptyX, emptyY ;
boxContainer.addEventListener("click", (e) => {
    
    randomBoxesArray.forEach((row, rowIndex)=>{
        randomBoxesArray.forEach((column, columnIndex)=>{

            //Positions of clicked element
            if(e.target === randomBoxesArray[rowIndex][columnIndex]){
               clickedX = rowIndex;
                clickedY = columnIndex;
                console.log("Clicked: " + clickedX, clickedY); 
            }

            //Positions of empty element
            if(randomBoxesArray[rowIndex][columnIndex].textContent === ""){
                emptyX = rowIndex;
                emptyY = columnIndex;
                console.log("Empty box before switch at: " + emptyX,  emptyY);
            }
        })
    })

    //SWITCHING ELEMENTS
        let diffX;
        let diffY;
        if(clickedY === emptyY){
            console.log("switch vertically");
            diffX =  clickedX - emptyX;   
            console.log("diffX: " + diffX);

            if(diffX == 1 || diffX == -1){
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
        else if(clickedX === emptyX){
            console.log("switch horizontally");
            diffY =  clickedY - emptyY;  
            console.log("diffY: " + diffY);
            
            if(diffY == 1 || diffY == -1){
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










// randomBoxesArray.forEach((row, rowIndex)=>{
//             randomBoxesArray.forEach((column, columnIndex)=>{
//                 if(randomBoxesArray[rowIndex][columnIndex].textContent === ""){
//                     emptyX = rowIndex;
//                     emptyY = columnIndex;
//                 }
//             })
//         })
//         console.log("Empty box after switch at: " + emptyX,  emptyY);
//             console.log("Empty box after switch at: " + emptyX,  emptyY);
//             console.log(randomBoxesArray);


//         }
           // Begin with changing empty box
            
            // console.log(randomBoxesArray);
            // //loop needed, x and y didnt get updated
            // randomBoxesArray.forEach((row, rowIndex)=>{
            //     randomBoxesArray.forEach((column, columnIndex)=>{
            //         if(randomBoxesArray[rowIndex][columnIndex].textContent === ""){
            //             emptyX = rowIndex;
            //             emptyY = columnIndex;
            //         } 
            //     })
               
            // })
            
            // console.log("Empty box after switch at: " + emptyX,  emptyY);
            // console.log("clickedY "+ clickedY);

            // if(diffX > 0){
           
            //         let tempEmptyTop = randomBoxesArray[emptyX][emptyY].style['top'] 

            //         randomBoxesArray[tempClickedXplus][clickedY].style['top'] = randomBoxesArray[tempClickedXminus][emptyY].style['top'] 

            //         randomBoxesArray[emptyX][emptyY].style['top'] = randomBoxesArray[clickedX][clickedY].style['top'];

                    
            //}
         

   
        // else if(clickedX === emptyX){
        //     console.log("switch horizontally");
        //     diffY =  clickedY - emptyY;  
        //     console.log(diffY);

        //     let tempTop = randomBoxesArray[emptyX][emptyY].style['left'];
        //     randomBoxesArray[emptyX][emptyY].style['left'] = randomBoxesArray[clickedX][clickedY].style['left']
        //     randomBoxesArray[clickedX][clickedY].style['left'] = tempTop;
        //     // randomBoxesArray[emptyX][emptyY].style['top'] + (diffX * 100) +"px"

        //     let tempArr = randomBoxesArray[emptyX][emptyY];
        //     randomBoxesArray[emptyX][emptyY] = randomBoxesArray[clickedX][clickedY]
        //     randomBoxesArray[clickedX][clickedY] = tempArr;
        // randomBoxesArray.forEach((row, rowIndex)=>{
        //     randomBoxesArray.forEach((column, columnIndex)=>{
        //         if(randomBoxesArray[rowIndex][columnIndex].textContent === ""){
        //             emptyX = rowIndex;
        //             emptyY = columnIndex;
        //         }
        //     })
        // })
        // console.log("Empty box after switch at: " + emptyX,  emptyY);
        //     console.log("Empty box after switch at: " + emptyX,  emptyY);
        //     console.log(randomBoxesArray);


        // }else{
        //     console.log("can't switch");
        // }
