 let randomGuess;
 let noAttempts = 0;
 let previosAttempts = [];
 let maxAttempts;
 
 let low = 1;
 let high = 100;
 
 function rangeBar(){
    
    const rangeOutput = document.getElementById("range_output")
    rangeOutput.style.marginLeft = low + "%"
    rangeOutput.style.marginRight = (100 - high) + "%"
    rangeOutput.innerHTML = `(${low} - ${high})`
    rangeOutput.classList.add("range_anim")


    const lowVal = document.getElementById("low")
    lowVal.style.flex = low + "%"
    lowVal.style.backgroundColor = "skyblue"
    
    const space = document.getElementById("space")
    space.style.flex = (high - low) + "%"
    // space.style.backgroundColor = "orange"
    
    const highVal = document.getElementById("high")
    highVal.style.flex = (100 - high) + "%"
    highVal.style.backgroundColor = "skyblue"
}

function guessNumber(){
    randomGuess = Math.floor(Math.random() * 100)
    console.log(randomGuess);
    // display start of the game
    newSplash()
}
function newSplash(){
    // document.getElementById("splash_page").style.display = "block";
    document.getElementById("start_newgame").style.display = "none"
    document.getElementById("start_newBtn").style.display = "none"
}
function startGame(){
    document.getElementById("start_newgame").style.display = "block"
    document.getElementById("splash_page").style.display = "none";
    document.getElementById("start_newBtn").style.display = "none"
}

function easyMode (){
    maxAttempts = 10;
    startGame()
} 

function hardMode (){
    maxAttempts = 5;
    startGame()
} 


function compareNumbers(){
    // get input
    //    e.preventDefault();
    noAttempts ++;
    
    let inputValue = Number(document.getElementById("inputValue").value)
    previosAttempts.push(inputValue)
    // document.getElementById("inputValue").innerText = ""

    document.getElementById("no_attempts").innerText = noAttempts
    document.getElementById("previous_attempts").innerText = previosAttempts
    const display_message = document.getElementById("display_message")
    
    if(noAttempts < maxAttempts ){
        if(inputValue > randomGuess){
            if (inputValue < high) high = inputValue 
            display_message.innerHTML = "Too High"
            document.getElementById("inputValue").value = ""
        }else if(inputValue < randomGuess){
            if (inputValue > low)  low = inputValue
            display_message.innerHTML = "Too low"
            document.getElementById("inputValue").value = ""
        }else{
            display_message.innerHTML = "You Won! in " + noAttempts + " attempts"
            startnewGame()
            
        }
    }else{
        if(inputValue > randomGuess){
            display_message.innerHTML = "Too High! the correct answer was " + randomGuess
            document.getElementById("inputValue").value = ""
            
            startnewGame()
        }else if(inputValue < randomGuess){
            display_message.innerHTML = "Too Low! the correct answer was " + randomGuess
            document.getElementById("inputValue").value = ""
            startnewGame()
        }else{
            display_message.innerHTML = "You Won! in " + noAttempts + " attempts"
            startnewGame()
            
        }
    }
    rangeBar()
    
}
function startnewGame(){
    const gameEnded = document.getElementById("guess")
    gameEnded.innerText = "Game Ended!"
    gameEnded.classList.add("gameEnded")
    document.getElementById("start_newBtn").style.display = "block"
    document.getElementById("inputValue").value =""
    document.getElementById("inputValue").readOnly = true
    // document.getElementById("check_btn").setAttribute("disabled", "")
}
function reload(){
    window.location.reload();
}