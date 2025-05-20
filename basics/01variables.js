const accId = 1443
let accEmail = "abc.gmail.com"
var accPass = "1552"
accCity = "Jaipur"


// accId = 1552
//changing const value is not allowed 
console.log(accId);

// prefer not to use var because of issue in block scope and functional scope 

accEmail = "bcd.gmail.com"
accPass = "4553"
accCity = "chamba"

let accState;

console.table([accId , accEmail , accPass , accCity , accState])
