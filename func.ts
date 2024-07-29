function addTwo(num: number) {
  return num + 2;
}

addTwo(10);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("username");

function signupUser(username: string, email: string, password: string) {
  console.log(`Username:${username}, Email:${email},Password:${password}`);
}

function loginUser(
  username: string,
  password: string,
  isLogin: boolean = false
) {
  console.log(`Name:${username}, Password:${password}, isLoggedin:${isLogin}`);
}

loginUser("anna", "testing123");

function greetings(str: string): string {
  return "Hello World";
}

function getValue(value: number): boolean {
  if (value > 5) {
    return true;
  }

  return false;
}

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
console.log(multiply(3, 2));

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `The hero is ${hero}`;
});

function consoleError(errmSG: string): void {
  console.log(errmSG);
}

//when a function never returns a value
function handleError(errMSG: string): never {
  throw new Error(errMSG);
}
