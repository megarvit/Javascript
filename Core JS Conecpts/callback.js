// function greeting(name){
//     console.log(`Hello ${name}`);
// }

// function getUserInput(callback){
//     var name = prompt('Please enter your name: ');
//     callback(name);
// }

// getUserInput(greeting);

function greeting(name){
    console.log(`Hello ${name}`);
}

function getUserInput(cb){
    var name = prompt('Please enter your name: ');
    cb(name);
}

getUserInput(greeting);