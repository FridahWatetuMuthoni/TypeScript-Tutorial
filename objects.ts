const USER = {
  name: "hitesh",
  email: "hitesh@gmail.com",
  isActive: true,
};

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "jane", isPaid: true });
let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);

type User = {
  username: string;
  email: string;
  isActive: boolean;
};

function registration(user: User): User {
  console.log(user);
  return user;
}

registration({ username: "Anna", email: "anna@gmail.com", isActive: true });

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("X cordinate is " + pt.x);
  console.log("Y cordinate is " + pt.y);
}
printCoord({ x: 100, y: 100 });

type MyUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditDetails?: number; //optional parameter
};

let currentUser: MyUser = {
  _id: "12345",
  name: "jane",
  email: "jane@gmail.com",
  isActive: false,
};

console.log(currentUser.name);

///mix and match of types
type cardNumber = {
  cardNum: string;
};

type cardDate = {
  cardDate: string;
};

type cardData = cardNumber & cardDate;
