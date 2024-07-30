// union is the combination of two or more types

//when a variable can return either a number or string
let score: number | string = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 33378 };
let jane: User | Admin = { username: "jane", id: 1456 };

function getDbId(id: number | string) {
  console.log(`DB id is : ${id}`);
}

function manipulation(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id + 2;
  }
}

///using arrays

const data: (number | string)[] = [];

data.push("anna");
data.push("jane");

let pi: 3.14 = 3.14;

let seatAllocation: "aisle" | "middle" | "window";

seatAllocation = "middle";
