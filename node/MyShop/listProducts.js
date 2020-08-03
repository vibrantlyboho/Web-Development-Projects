
var faker= require("faker");

console.log("====================");
console.log("WELCOME TO MY SHOP!!");
console.log("====================");



for(var i=0; i<10; i++){
    /*var randomproduct = faker.commerce.productName(); 
    var randomprice = faker.commerce.price(); 
    console.log(randomproduct +" - $"+randomprice+"\n");*/

    console.log(faker.commerce.productName() +" - $"+faker.commerce.price());
}
