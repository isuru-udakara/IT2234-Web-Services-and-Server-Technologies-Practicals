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

console.log("\n");

// takes n as an array of numbers
const mysum= (...n) => {
    let sum= 0;for(let ar of n){
        sum += ar;
    }
    console.log(sum);
};
mysum(3, 4, 6, 7, 8);
mysum(34, 24, 90, 45, 34);

console.log("\n");

const mySum2= (...n) => {return n.reduce((t, i) => t= t + i)};
console.log(mySum2(5, 3, 9, 4, 8));
console.log(mySum2(3, 9, 12, 8, 45));