var x = 567;
if(x >= 0){
    res = 0;
    while ( x != 0){
        var r = x % 10;
        res= (res * 10) + r;
        x = parseInt(x/10);
    }
    console.log(res);
}
else{
    x = x * -1;
    res = 0;
    while (x != 0){
        var r = x % 10;
        res = (res * 10) + r;
        x = parseInt(x/10);
    }
    console.log(-1*res);
}