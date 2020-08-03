function average (t){
    var avg=0;
    for(var i=0; i<t.length; i++){
        avg=avg+t[i];
    }
    avg=Math.ceil(avg/t.length);
    console.log(avg);
}

var s= [90, 98, 89, 100, 100, 86, 94];
average(s);