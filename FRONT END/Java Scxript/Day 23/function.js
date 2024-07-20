//Function
//Function Declaration
console.log("function Declaration")
function reverse(n){
    res=0
    while(n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=-123;
if(x>=0){
    x=reverse(123);
    console.log(x);
}
else{
    x=x*-1
    z=reverse(x);
    console.log(-1*z);
}

//Function Expression
console.log("Function Expression")
var reverse=function(n){
    res=0
    while(n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=123;
var y =3;
var res=(x*10)+3;
res=reverse(res);
res=(res*10)+3;
res=reverse(res);
console.log(res);

var a = 565;
var b = 5;
var res=(a*10)+5;
res=reverse(res);
res=(res*10)+5;
res=reverse(res);
console.log(res);


//Arrow Function
console.log("Arrow Function");
var result=(n,s)=>{
    console.log(n%s);
}
result(13,4);

//IIFE
console.log("IIFE");
(function(){
    var n=5;
    var res=1;
    for(var i=1;i<=n;i++){    //Increment
        res=res*i;
    }
    console.log(res);
})();
(function(){
    var n=6;
    var res=1;
    for(var i=n;i>=1;i--){   //Decrement
        res=res*i;
    }
    console.log(res);
})();

//Named Function expression
console.log("Named Function Expression");
var number=function checknum(n){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
number(23);


//User Defined Functions
//with parameters with return type
console.log("with parameters with return type")
function wpwr(a,b,c){
    return a+b+c;
}
console.log(wpwr(10,20,30));

//with parameters without return type
console.log("with parameters without return type")
function wpwor(a,b,c){
    console.log(a+b+c);
}
console.log(wpwor(10,20,30));

//without parameters with return type
console.log("without parameters with return type")
function wopwr(){
    return 10+20+30;
}
console.log(wopwr());

//without parameters without return type
console.log("without parameters without return type")
function wopwor(){
    console.log(10+20+30);
}
console.log(wopwor());