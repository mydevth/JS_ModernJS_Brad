//16 If statements and Comparision Operaters

// if(something){
//   do something
// } else {
//   do something else
// }

// const id = '100';
const id = 100;

// //Equal To
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// //Not Equal To
// if (id != 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// //Equal to value & Type
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// //Not Equal to value & Type
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (id) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// //test  if undefined value
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// //greater os less than
// if (id <= 200) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// IF ELSE
const color = 'yellow';

// if (color === 'red') {
//   console.log('color is red');
// } else if (color === 'blue') {
//   console.log('color is blue');
// } else {
//   console.log('color is not red or blue');
// }

//Logical operators
const name = 'Akkadate';
const age = 25;

// AND - &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//Without Braces  (not recommented)
if (id === 100)
  console.log('correct');
else
  console.log('incorrect');

