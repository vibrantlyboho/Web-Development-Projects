var todos = [];
// todos now has global scope. It can now be accessed from the chrome console.

window.setTimeout( function()
{

do
{
var input = prompt("what would you like to do?");

if (input === "list"){
	list();
}
else if(input === "new"){
	newtodo();
}

else if(input === "delete"){
	deltodo();
}

}while(input !== "quit");
console.log("ok, you've quit the app!");

}, 500);

function list()
{
	console.log("****************");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	})
	console.log("****************");
}

function newtodo()
{
	var newtodo = prompt("Enter new todo");
	todos.push(newtodo);
	console.log("Added todo");
}

function deltodo()
{
	var ind = prompt("Enter the index of the todo you want to delete");
	todos.splice(ind, 1);
	console.log("Deleted todo");

}