//var to keep track of easy(3) or hard(6)
var numberOfSquares=6;
//array of colors
var colors= generateRandomColors(numberOfSquares);
//selecting te squares
var squares= document.querySelectorAll(".square");
//setting the color to be guessed
var pickedColor= pickColor();
//selecting the display so as to assign rgb value of picked color 
var colorDisplay= document.getElementById("colorDisplay");
//to display correct or try again message
var messageDisplay= document.querySelector("#message");
//selecting h1 to change its backgorund color when user selects the right color
var h1= document.querySelector("h1");
//selecting the reset button
var resetButton= document.getElementById("reset");
//to select the mode of the button ie easy or hard
var modeButton= document.querySelectorAll(".mode");

//refactoring code
init();
function init()
{

}

//refactoring code for easy and hard buttons
for(var i=0; i<modeButton.length; i++)
{
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares=3 : numberOfSquares=6;  
        reset();

    });
}

function reset()
{
    //setting text content to new colors
    resetButton.textContent="New Colors";
    //reset message display
    messageDisplay.textContent=" ";
    //generate all new colors
    colors= generateRandomColors(numberOfSquares);
    //select a new pickedColor
    pickedColor= pickColor();
    //assigning picked color value to display
    colorDisplay.textContent= pickedColor;
    //change the colors of squares on the page
    for(var i=0; i< squares.length; i++)
    {   

        //if to assign background as none in easy mode
        if(colors[i])
        {    
            squares[i].style.display= "block";
            //loop to assign initial color in array to each square
            squares[i].style.backgroundColor=colors[i];
        }
        else
            squares[i].style.display= "none";

    }    
    //changing background color of h1 to #232323
    h1.style.background="steelblue";
}

/*
//to select the easy button
var easyButton= document.querySelector("#easyButton");
//to select the hard button
var hardButton= document.querySelector("#hardButton");
//adding event for easy button
easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfSquares=3;
    colors= generateRandomColors(numberOfSquares);
    //setting new picked color
    pickedColor=pickColor();
    //setting rgb display to new picked color
    colorDisplay.textContent=pickedColor;
    //setting the color display to the colors given in array
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor= colors[i];
        }
        else
        {
            squares[i].style.display= "none";
        }
    }
});

//adding event for hard button
hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numberOfSquares=6;
    colors= generateRandomColors(numberOfSquares);
    //setting new picked color
    pickedColor=pickColor();
    //setting rgb display to new picked color
    colorDisplay.textContent=pickedColor;
    //setting the color display to the colors given in array
    for(var i=0; i<squares.length; i++)
    {
            squares[i].style.backgroundColor= colors[i];
            squares[i].style.display= "block";
    }
});
*/
//adding an event listener for reset button
resetButton.addEventListener("click", function(){
    reset();
});

//assigning picked color value to display
colorDisplay.textContent= pickedColor;

for(var i=0; i< squares.length; i++)
{
    //loop to assign initial color in array to each square
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === pickedColor)
        {
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again?";
            changeColors(pickedColor);
            h1.style.backgroundColor= pickedColor;
        }
        else
        {
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent="Try Again!";
        }
    });
}

//function to change all squares to the pickedColor when the user guesses the right answer
function changeColors(color)
{
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

//function to pick a random color from array to guess
function pickColor()
{
    //selecting a random number from 0-5 and using it as index of colors array to pick a random color
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function to make an array of random colors and return it
function generateRandomColors(num)
{
    //make an array
    var arr= [];
    //add random colors to array
    for(var i=0; i<num; i++)
    {
        //function to get a random color and push it into arr
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

//function to get random colors for array
function randomColor()
{
    //Choose Red btw 0-255
    var r=Math.floor(Math.random() * 256);
    //Choose green btw 0-255
    var g=Math.floor(Math.random() * 256);
    //Choose blue btw 0-255
    var b=Math.floor(Math.random() * 256);
    console.log("rgb(" + r +", " + g + ", " + b + ")");
    return "rgb(" + r +", " + g + ", " + b + ")";
}