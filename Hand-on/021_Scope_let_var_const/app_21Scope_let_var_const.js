//21 Block Scope With let & const

//+++Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }
// test();     //Function Scope:  4 5 6
// console.log('Global Scope: ', a, b, c); //Global Scope:  1 2 3

// if (true) {
//   //block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);    //If Scope:  4 5 6
// }
// console.log('Global Scope: ', a, b, c); //Global Scope:  4 2 3  (var is less security)

// for (let a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }
// console.log('Global Scope: ', a, b, c); //Global Scope:  1 2 3


for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}
console.log('Global Scope: ', a, b, c); //Global Scope:  10 2 3
