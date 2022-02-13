//45 Build in constructors

// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//function 
const getSum1 = function (x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 +1');

// console.log(getSum1(1, 2));
// console.log(getSum2());

// ผลเหมือนกันแนะนำให้ทำแบบแรกจะดี กว่าสั้นกว่า 

//Object
const kob1 = { name: "Kob1" };                  //{name: 'Kob2'}
const kob2 = new Object({ name: 'Kob2' });      //{name: 'Kob2'}

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

//regular expressions
const re1 = /\w+/;                               //    /\w+/
const re2 = new RegExp('\\w+');                   //   /\w+/

console.log(re1);


