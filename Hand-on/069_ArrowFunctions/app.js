// const sayHello = function () {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello Arrow Functions');
// }

//One line function does not need braces
// const sayHello = () => console.log('Hello Arrow Functions One Line');


// const sayHello = function () {
//   return 'Hello normal return';
// }

//One Line returns same as above
// const sayHello = () => 'Hello Arrow function return';

//Return object
// const sayHello = () => ({ msg: 'Hello' });

//Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName} `);

// sayHello('Akkadate', 'Siripong');

const users = ['John', 'Rafael', 'William'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
