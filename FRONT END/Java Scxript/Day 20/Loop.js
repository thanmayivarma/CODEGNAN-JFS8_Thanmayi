//For Loop
//For Loop
for (var i=0; i <=5; i++){
    console.log(i);
}

for(var i=5;i>=0;i--){
    console.log(i);
}
/*
for(var i=0;i<=5;i--){
    console.log(i);
}
*/

/*

function secondGreatest(a, b, c) {
  if ((a >= b && a <= c) || (a >= c && a <= b)) {
    return a;
  } else if ((b >= a && b <= c) || (b >= c && b <= a)) {
    return b;
  } else {
    return c;
  }
}

// Example usage
console.log(secondGreatest(10, 20, 30)); // Output: 20
console.log(secondGreatest(50, 20, 30)); // Output: 30
console.log(secondGreatest(10, 50, 30)); // Output: 30


let a = 20;
let b = 50;
let c = 30;
if((a>=b)&&(a>=c)){
    if(b>=c){
    console.log(b);
    }
    else{
        console.log(c);
     }
    }
    else if((b>=a)&&(b>=c)){';;'
        if(a>=c){
            console.log(a);
        }
        else{
            console.log(c);
        }
        }
    else{
        if(a>=b){
            console.log(a);
    }
    else{
        console.log(b);
    }
   }





   var x = 10;
var y = 30;
var z = 20;

if ((x >= y && x <= z) || (x <= y && x >= z)) {
    console.log("The second greatest number is " + x);
} else if ((y >= x && y <= z) || (y <= x && y >= z)) {
    console.log("The second greatest number is " + y);
} else {
    console.log("The second greatest number is " + z);
}
*/



var x = 10;
while(x>=1){
console.log(x);
x--;
}



let originalNumber = 12345;
let reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber); // Output: 54321

originalNumber = -6789;
reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber); // Output: -9876