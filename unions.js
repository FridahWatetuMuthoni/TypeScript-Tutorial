// union is the combination of two or more types
//when a variable can return either a number or string
var score = 33;
var hitesh = { name: "hitesh", id: 33378 };
var jane = { username: "jane", id: 1456 };
function getDbId(id) {
    console.log("DB id is : ".concat(id));
}
function manipulation(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id + 2;
    }
}
///using arrays
var data = [];
data.push("anna");
data.push("jane");
var pi = 3.14;
var seatAllocation;
seatAllocation = "middle";
