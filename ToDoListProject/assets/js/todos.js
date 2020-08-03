//to check off specific tasks
/*$("li").click(function(){
    if($(this).css("color") === "rgb(128, 128, 128)")
    {
        $(this).css({
            color: "black",
            textDecoration : "none"});
    }
    else
    {
        $(this).css({
            color: "grey",
            textDecoration : "line-through"});
    }    
});*/
//simpler way to check off specific tasks
$("ul").on("click", "li", function(){ //.click() is changed to .on() because we need to assign listeners for future elements as well
    // but we are not using $("li").on("click", function(){}) as it has the same function of .click()
    // instead we have to apply .on() already existing parent element 
    $(this).toggleClass("checkoff");
});

//click on X to delete task
$("ul").on("click", "span", function(event){ //passing an event obj to function
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //remove passed in call back function because you want to remove the hidden elements, but when it's removed it must have fadeOut animation
    });
    event.stopPropagation(); // to prevent event bubbling, otherwise all the parent event listeners will also be activated
});

//take the input we enter and make it a new todo
$("input[type='text'").keypress(function(event){
    if(event.which === 13) //13 is the value for enter
    {
        //getting new todo from input box
        var newtodo= $(this).val();
        $(this).val(""); // to clear input from text box
        //create new li and add to ul
        //for this select element to append to ie ul
        //then use .append() function to add your html
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newtodo + "</li>"); //the new todo is added to the list when we hit enter
    }
});

//for toggling the input box 
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});



















