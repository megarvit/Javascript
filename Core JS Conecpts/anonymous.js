function greetings(){
    console.log("hello i am here. ");
}

console.log('before');
setTimeout(greetings, 1000); //1s gap 1000ms
console.log('after');

//here anyone globally can call greetings as it has a name
console.log('before');
setTimeout(function(){
    console.log('Hello I am also here but anonymous.');
},2000);
console.log('after');

const multiply = function(a, b){
    return a*b;
}
console.log(multiply(5,3));