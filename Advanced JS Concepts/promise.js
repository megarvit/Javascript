//creating a promise
let promise = new Promise((resolve,reject) => {
    if (result()){
        resolve('Success');
    } else {
        reject('Error');
    }
});

//handling of promises: 1. then() - used to handle fulfilment
//2. catch() - used to handle rejection
//3. finally() - executes regardless