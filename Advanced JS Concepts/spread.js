let arr = [1,2,3,4,5]; //value jaha use ho rahi h waha spread
let arr2 = [...arr]; //spread operator inserted all the elements of arr
console.log(arr);
console.log(arr2);
console.log(arr2.length);

let arr3 = [...arr,6,7];
console.log(arr3);

//rest operator - values jaha se assign ho rahi h waha pr use krenge rest
const [first,second, ...rest] = [1,2,3,4,5];
console.log(rest);