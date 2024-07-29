var USER = {
    name: "hitesh",
    email: "hitesh@gmail.com",
    isActive: true,
};
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "jane", isPaid: true });
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);
function registration(user) {
    console.log(user);
    return user;
}
registration({ username: "Anna", email: "anna@gmail.com", isActive: true });
function printCoord(pt) {
    console.log("X cordinate is " + pt.x);
    console.log("Y cordinate is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var currentUser = {
    _id: "12345",
    name: "jane",
    email: "jane@gmail.com",
    isActive: false,
};
console.log(currentUser.name);
