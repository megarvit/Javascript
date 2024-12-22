let myArray = [1,'hello',null,true,{money:'1 million $'}];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
console.log(`array length is ${myArray.length}`);

for(let i = 0; i<5; i++){
    console.log(myArray[i]);
}

//For Each loop

let foods = ['bread', 'rice', 'meat','pizza'];
foods.forEach(function(str){ //unanonymous fxn
    console.log(str);
})

foods.forEach(function(str,ind){ //unanonymous fxn
    console.log(str, ind);
})

//common methods: push/pop, shift/unshift, splice(middle mese add or remove)
//toString, sort, valueOf : array also use refrence like objects

const f = [1,40,3];
f.sort();
console.log(f);