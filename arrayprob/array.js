var input= [];
window.setTimeout(function(){
    /*for(var i=0; i<5; i++)
     input[i]=prompt("Enter the element");*/
    printreverse([5, 4, 6, 3]);
    
    isuniform([5, 5, 5, 5]);

    var s=sumarr([5, 5, 5, 5]);
    console.log("*********************************");
    console.log("The sum of the array is: " + s);
    console.log("*********************************");


    var m=max([5, 5, 5, 15]);
    console.log("*********************************");
    console.log("The max of the array is: " + m);
    console.log("*********************************");

    
}, 500);

function printreverse(arr)
{
    console.log("*********************************");
    console.log("The original array: " + arr);
    var arr2= arr.slice().reverse();
    console.log("The reversed array: " +arr2);
    console.log("*********************************");
}

function isuniform(input){
    var flag=0;
    for(var i=0; i<5; i++)
    {
        if(input[0] === input[i])
            flag=1;
        else
        {
            flag=0;
            break;
        }
    }
    if(flag===0) 
    console.log("*********************************\n" + "False\n"+ "*********************************");
    else
    console.log("*********************************\n" + "True\n"+ "*********************************");

}

function sumarr(input){
    var sum=0;

    input.forEach(function(element) {
        var num= parseInt(element);
        sum+=num;
    });
    return sum;
}

function max(input)
{
    var max=parseInt(input[0]);
    input.forEach(function(element){
        if(parseInt(element)> max)
        max=parseInt(element);
    });
    return max;
}