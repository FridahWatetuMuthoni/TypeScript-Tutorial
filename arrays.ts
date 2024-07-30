const superHeros: string[] = [];

superHeros.push("superman");
superHeros.push("batman");
superHeros.push("flash");

console.log(superHeros);

const decimalNumbers: number[] = [];

decimalNumbers.push(41);
decimalNumbers.push(30);
decimalNumbers.push(20);
console.log(decimalNumbers);

const heroPower: Array<number> = [];

type User = {
  readonly _id: number;
  name: string;
  isActive: boolean;
  email: string;
};

const users: Array<User> = [];

users.push({
  _id: 10,
  name: "fridah",
  isActive: true,
  email: "fridah@gmail.com",
});

console.log(users);
