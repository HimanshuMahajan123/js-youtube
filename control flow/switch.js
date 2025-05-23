// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//NOTE !!  agar kisi case me break nahi lagaya toh uske baad ke saare case execute ho jayenge except the default case 

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}