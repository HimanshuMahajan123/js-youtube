// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //string gets converted into number 
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);  //false
console.log(null >= 0);  //true
//Equality check and comparisons work differently .. comparisons convert null to a number therefore last one gives true value   

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  //strict check 

console.log("2" === 2);