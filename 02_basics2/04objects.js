// const tinderUser = new Object()  //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser.id);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser["email"]); //agar square brackets se console karna hai to key ko string ki trh pass krna hoga

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.{here target object is {} }

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//***********************************************************************************

//DE STRUCTURE AN OBJECT

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor : Instructor} = course
console.log(Instructor);

