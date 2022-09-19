// Do you know any other way to copy the user object without changing its properties?

// let user = {
//   name: "Cosimo",
//   age: 30,
// };

// let newUser = user;

// newUser.name = "Paolo";

// console.log(newUser);
// console.log(user);
// there is the best way by using the JSON object, we change the "data" object to a json data and then parse the json data to create the new object ... the good thing about this method that it creates a full new object "deep copy" and not a "shallow copy"

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = JSON.parse(JSON.stringify(user));
newUser.name = "Paolo";

console.log(newUser);
console.log(user);
