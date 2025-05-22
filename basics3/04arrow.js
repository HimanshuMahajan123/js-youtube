const user = {
    username : "himanshu",
    price : "999",
    welcome :   function(){
        console.log(`${this.username} , welcome to the website`)   //this refers the current context 
        console.log(this)    //user is the current context so user will be printed
    }
}

// user.welcomeMessage()


// user.username = "sam"
// user.welcomeMessage()



// console.log(this);  //we are in node environment so thus refers to the emptty object(there is no context in global)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //note that this can only be used like this in case of an object and not in functions 
// }

// chai()


//ARROW FUNCTION:
const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
    console.log(this)
}

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2                   //when we use return keyword for returning , it is called explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2   //this is implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))

const addOne = (num1, num2) => {username: "hitesh"} // jab bhi {} aa jaye to return likhna zaruri hota hai  : {return {username: "hitesh"} }
console.log(addOne(3, 4))