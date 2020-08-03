//selecting the buttons player1, player2 and reset
var p1= document.getElementsByTagName("button")[0];
var p2= document.getElementsByTagName("button")[1];
var reset= document.getElementsByTagName("button")[2];
//selecting span in h1 to display p1 scores
var p1Display= document.getElementById("p1Display");
//counts score of p1
var p1score=0;
//selecting span in h1 to display p2 scores
var p2Display= document.getElementById("p2Display");
//counts score of p2
var p2score=0;
//to keep track if game over or not
var gameOver= false;
//to set the winning score
var winningScore=5;
//selecting the input value
var input=document.querySelector("input");
//selecting span in input display
var ipDisplay=document.getElementById("inputDisplay");

//setting up event listener for p1
p1.addEventListener("click", function(){
    if(!gameOver)
    {
        p1score++;
        //console.log(p1score, winningScore);
        if(p1score===winningScore)
        {
            gameOver= true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent= p1score;
    }
        
});

//setting up event listener for p2
p2.addEventListener("click", function(){
    if(!gameOver)
    {
        p2score++;
        if(p2score===winningScore)
        {
            gameOver= true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent= p2score;
    }
            
});


//setting up event listener for reset
reset.addEventListener("click", function(){
    resetfn();
});

//adding event when new input is set
input.addEventListener("change", function(){
    ipDisplay.textContent= input.value;
    winningScore= Number(input.value);
    resetfn();
});

//reset is required when the reset button is clicked and when the user gives the input, so changinf reset into a function
function resetfn(){
    p1score=0;
    p2score=0;
    p1Display.textContent= p1score;
    p2Display.textContent= p2score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false; 
}
