//var c = 300 //var has global scope
let a = 300 //let and const have block scope . therefore var is not var is not used in js 

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);






function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //NO ERROR HERE!

function addone(num){
    return num + 1
}



addTwo(5)     //ERROR ERROR
const addTwo = function(num){        //addtwo type functions are sometimes called as expressions
    return num + 2
}
