function PrintMsg(){
    console.log("Hello JS");
}
PrintMsg();

function sum(){
    return 5 + 6;
}
console.log(sum());

function sub(a, b){
    return a - b;
}
console.log(sub(56, 34));
console.log(sub(56, 90));
console.log(sub(23, 90));

console.log("\n");

// write a  boolean function to find a given number is prime
function prime(n){
    let isPrime = true;
    if (n === 1) {
        return false;
    }else if (n > 1) {
        for (let i = 2; i <= n/2; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log("1: "+prime(1));
console.log("3: "+prime(3));
console.log("2: "+prime(2));
console.log("10: "+prime(10));
console.log("4: "+prime(4));