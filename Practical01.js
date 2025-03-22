// arrow function
const msg= () => {return "Hello "};
console.log(msg());

// sum two numbers 
const sum= (x, y) => {return x + y};
console.log(sum(23, 90));
console.log(sum(34, 35));
console.log(sum(90, 32));
console.log(sum(89, 34));

console.log("\n");

// default parameters 
const mult= (x= 20, y= 5) => {return x * y};
console.log(mult());
console.log(mult(90));
console.log(mult(y= 86));
console.log(mult(x= 80));
console.log(mult(90, 10));