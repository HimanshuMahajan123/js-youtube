function greet(){
    console.log("hello ! how high are you!");
    
}

// greet();  //writing "greet" only will not print greet message it only shows the reference of the function to print we must add "()" at last 


function multiply(number1 , number2){
    return number1 * number2
}

const result = multiply(3,5);
// console.log("result :" , result)


// function loginUserMessage(username){
//     if(!username){
//         console.log("PLease enter a username"); 
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


function loginUserMessage(username = "sam"){   //default value of parameter username is "sam"
    if(!username){
        console.log("PLease enter a username"); 
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))
