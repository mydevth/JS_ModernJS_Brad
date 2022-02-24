//18 Function Decalaration & Expressions

//Functin Declarations

// function greet() {
//   console.log('Hello');
// }
// greet();     //Hello

// function greet() {
//   return 'Hello';
// }
// console.log(greet());     //Hello

function greet(firstName = 'Kob', lastName = 'Jung') {
  // if (typeof firstName === 'undefined') { firstName = 'Kob' }  
  // if (typeof lastName === 'undefined') { lastName = 'Jung' }
  return 'Hello ' + firstName + ' ' + lastName;
}
// console.log(greet('Akkadate', 'Siripong'));     //Hello Akkadate Siripong
// console.log(greet());                           //Hello Kob Jung
// console.log(greet('Akkadate'));                 //Hello Akkadate Jung

//-----Function Expresions  (assign function to variable)
// const square = function (x = 3) {
//   return x * x;
// };
// console.log(square(8));

//--- Immidiatley Invokable Function Expressions - IIFEs  (define and run in the same time)
// (function () {
//   console.log('IIFE Ran..');
// })();                                               //IIFE Ran..

// (function (name) {
//   console.log('Hello ' + name);
// })('Kob');                                 //Hello Kob

//Property Methods   (Function put in Object that called Method)

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}
todo.add();                       //Add todo..
todo.edit(22);                    //Edit todo 22
todo.delete();                    //Delete todo...