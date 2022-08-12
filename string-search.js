let str = "Hello! This is string search, which works on string.";

let index = str.indexOf("string");
console.log("After indexOf:",index);

index = str.lastIndexOf("string");
console.log("After lastIndexOf:",index);

index = str.search("string")
console.log("After Search:",index);

index = str.match(/ing/g);
console.log("After match:",index);

index = str.includes("is");
console.log("After includes:",index);

index = str.startsWith("is");
console.log("After startWith:",index);

index = str.endsWith("string")
console.log("After endsWith:",index);