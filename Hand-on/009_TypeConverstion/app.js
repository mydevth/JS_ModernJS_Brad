//Type Converstion
let val;

//number to string
// val = 5;
val = String(5555);
val = String(4 + 4);

//boolean to string
val = String(true);

//date to string
val = String(new Date());

//Array to string
val = String([1, 2, 3, 4]);

//toString
val = (5).toString();
val = (true).toString();

//string to number
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello');        //NaN  -not a number
val = Number([1, 2, 3]);      //NaN  -not a number

val = parseInt('100.10');     //100
val = parseFloat('1000.30');

//output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);   //only work on String
// console.log(val.toFixed());   //only work on Number

// const val1 = 5;
const val1 = String(5);
const val2 = 6;

// const sum = val1 + val2;    //string
const sum = Number(val1 + val2);   //number 56

console.log(sum);
console.log(typeof sum);

