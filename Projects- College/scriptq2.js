//JS Solution for Series Q2

function employee(name, noh, hr, gross){
    this.name= name;
    this.noh= noh;
    this.hr=hr;
    this.gross= gross;
}

function gpay(noh, hr)
{   
    if(noh>40)
    {
        var time_and_a_half= hr*1.5;
        rate= (40* hr) + ((noh-40) * time_and_a_half);
    }
    else{
        rate= (noh* hr);
    }
    return rate;
}

function solution()
{ var e = new Array();
    
    for(var i=0; i<3; i++){
        e.push(new Object());
        e[i].name = prompt("Enter name of employee");
        e[i].noh= parseInt(prompt("Enter number of hours "+ e[i].name+ " worked last week"));
        e[i].hr= parseInt(prompt("Enter hourly rate of "+ e[i].name));
        e[i].gross= gpay(e[i].noh, e[i].hr);
        console.log(e[i].gross);    
    }
    
    document.write("<h3> Gross Pay </h3>");

    for(var i=0; i<3; i++)
    {
        document.write("Employee Name: "+ e[i].name);
        document.write("<br> Number of hours worked: "+e[i].noh);
        document.write("<br> Hourly Rate: "+ e[i].hr);
        document.write("<br> Gross Pay: "+ e[i].gross+ "<br><br>");
    }
    
}

