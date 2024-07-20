console.log("Regular Expressions");

// \d
var pattern=/\d/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \D
var pattern=/\D/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \s
var pattern=/\s/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \S
var pattern=/\S/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \w
var pattern=/\w/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \W
var pattern=/\W/g;
var text= "My age is 22 .";
var res= text.match(pattern);
console.log(res);

// \b
var pattern=/\bage\b/g;
var text= "My age is 22 age .";
var res= text.match(pattern);
console.log(res);