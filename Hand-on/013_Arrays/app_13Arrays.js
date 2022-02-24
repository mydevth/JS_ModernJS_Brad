//13 Arrays and Array methods

//create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// console.log(numbers);
// console.log(numbers2);
// console.log(fruit);
// console.log(mixed);

let val;

//get array rength
val = numbers.length;      //7
//check if is array
val = Array.isArray(numbers);  //true
//get single value
val = numbers[2];   //33
val = numbers[0];   //43
//insert in array
numbers[2] = 100;    //[43, 56, 100, 23, 44, 36, 5]
//find index of value
val = numbers.indexOf(36);   //5

//MUTATING ARRAYS
//add on to end
numbers.push(250);   //[43, 56, 100, 23, 44, 36, 5, 250]
//aded on to front
numbers.unshift(120);  //[120, 43, 56, 100, 23, 44, 36, 5, 250]
//take off from end
numbers.pop();    //[120, 43, 56, 100, 23, 44, 36, 5]
//take of from front
numbers.shift();  //[43, 56, 100, 23, 44, 36, 5]
//splice values (remove)
numbers.splice(1, 3)  // [43, 44, 36, 5]
//reverse
numbers.reverse();    // [5, 36, 44, 43]

//concaternate array
val = numbers.concat(numbers2);  //[5, 36, 44, 43, 22, 45, 33, 76, 54]

//sorting arrays
val = fruit.sort();  //['Apple', 'Banana', 'Orange', 'Pear']
val = numbers.sort();   //36, 43, 44, 5]

//user the "compare functin"             
val = numbers.sort(function (x, y) {
  return x - y;
});                              //[5, 36, 43, 44]

//reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});                              //[44, 43, 36, 5]

//find
function under40(num) {
  return num < 40;
}
val = numbers.find(under40);       //36    (first number that found under 40)

function over1(num) {
  return num > 1;
}
val = numbers.find(over1);       //44    (first number that found over 1)


console.log(numbers);
console.log(val);
