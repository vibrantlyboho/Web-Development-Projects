//JS Solution for Series Q1

function solution()
{
    var n1= parseInt(prompt("Enter first integer"));
    var n2= parseInt(prompt("Enter second integer"));
    var n3= parseInt(prompt("Enter third integer"));
    var min= Math.min(n1, n2, n3);
    var max= Math.max(n1, n2, n3);
    var sum = min + max;
    var avg = sum/2;
    var prod= min * max;
    alert("The minimum value is: "+ min);
    alert("The maximum value is: "+ max);
    alert("The sum of the min value and max value is: "+ min+ " + "+ max+ " = "+ sum);
    alert("The average of the min value and max value is: ("+ min+ " + "+ max+ ")/ 2 = "+ avg);
    alert("The product of the min value and max value is: "+ min+ " * "+ max+ " = "+ prod);    
}
