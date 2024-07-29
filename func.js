function addTwo(num) {
    return num + 2;
}
addTwo(10);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("username");
function signupUser(username, email, password) {
    console.log("Username:".concat(username, ", Email:").concat(email, ",Password:").concat(password));
}
function loginUser(username, password, isLogin) {
    if (isLogin === void 0) { isLogin = false; }
    console.log("Name:".concat(username, ", Password:").concat(password, ", isLoggedin:").concat(isLogin));
}
loginUser("anna", "testing123");
function greetings(str) {
    return "Hello World";
}
function getValue(value) {
    if (value > 5) {
        return true;
    }
    return false;
}
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(3, 2));
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "The hero is ".concat(hero);
});
function consoleError(errmSG) {
    console.log(errmSG);
}
//when a function never returns a value
function handleError(errMSG) {
    throw new Error(errMSG);
}
