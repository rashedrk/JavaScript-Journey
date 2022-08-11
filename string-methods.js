let text = "Hello! This is string methods";

let part = text.slice(15,21);
console.log("After slice1:",part);

part= text.slice(-14,-8)
console.log("After slice2:",part);

part=text.slice(7)
console.log("After slice3:",part);

part = text.substring(15,21);
console.log("After substring:",part);

part = text.substr(15,6);
console.log("After substr:",part);

let text2 = "Hello! Rakib, Hello! Siddik."
let newtext = text2.replace("Hello","Good Morning")
console.log("After replace:",newtext);

let newtext2= text.concat(text2);
console.log("After concat1:",newtext2);
newtext2= text.concat(" ",text2);
console.log("After concat2:",newtext2);

let text3 = "             Hello! Rahim.          ";
let newtext3 = text3.trim();
console.log("After trim:",newtext3);

let text4 = "5";
let padded = text4.padStart(4,"x"); 
console.log("After Padding:",padded);
padded = text4.padEnd(4,"x");
console.log("After Padding:",padded);

let char = text.charAt(5);
console.log("After charAt:",char);

char = text.charCodeAt(0);
console.log("The Unicode is:",char);

char = text[0];
console.log(char);

let array = text.split(" ");
console.log("after split1:",array);
array = text.split("");
console.log("after split2:",array);