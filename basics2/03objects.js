// const JsUSER = new Object() //this is a singleton object


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",  //keys are automatically recognised as strings by js 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   //syntax to use symbol is important(agar square brackets add nahi krte to string ban jati ye)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} //this is an object literal

console.log(JsUser.name);
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)   //this restricts any further changes in the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);     

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());