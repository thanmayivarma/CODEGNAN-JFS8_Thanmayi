console.log("Regular Expression")
//.(dot)
var re = /h.t/g;
var text = "here is a hot pot and a hat";
var res = text.match(re);
console.log(res);

//^(caret)
var re = /^the/g;
var text = "the Apple";
var res = text.match(re);
console.log(res);

var re = /^The/gi; //(ignore case)
var text = "the Apple";
var res = text.match(re);
console.log(res);

//$(dollar)
var re = /boy.$/g;
var text = "I am a boy.";
var res = text.match(re);
console.log(res);

var re = /Boy.$/gi; //(ignore case)
var text = "I am a boy.";
var res = text.match(re);
console.log(res);

//*(asterisk)
var re = /ab*c/g;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);

//+(plus)
var re = /ab+c/g;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);

//?(question mark)
var re = /colors?/g;
var text = "I have a black color toy which is one of the beautiful colors";
var res = text.match(re);
console.log(res);

//{}(curly braces)
var re = /\d{3}-\d{3}-\d{4}/g;
var text = "9381373920,938-137-3920";
var res = text.match(re);
console.log(res);

//[](square brackets)
var re = /[ch]at/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);

//|(pipe)
var re = /cat|hat7/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);




