// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,5));

let sum = function(a,b){
    return a+b;
}

console.log(sum(4,5));

//Arrow function - used as callbacks for a more concise syntax

let sum1 = (num1,num2) => {
    return num1+num2;
}

let sum2 = (n1,n2) => n1+n2;

let square = num => num*num;

console.log(sum1(14,5));
console.log(sum2(14,5));
console.log(square(5));