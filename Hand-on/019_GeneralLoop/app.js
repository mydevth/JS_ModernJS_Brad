// 19 General Loops

//For Loop (know number of loop)
// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }
//   console.log('Number ' + i);
// }

//While Loop (unknow number of loop)

// let i = 0;
// while (i < 10) {
//   console.log('number ' + i)
//   i++;
// }

//  Do While
// let i = 100;
// do {
//   console.log('number ' + i);
//   i++;
// }
// while (i < 10);

//Loop through array
const cars = ['Ford', 'Chevuy', 'Honda', 'Toyata'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function (car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users = [
//   { id: 1, name: 'Kob' },
//   { id: 2, name: 'Phing' },
//   { id: 3, name: 'Aye' }
// ];

// const ids = users.map(function (user) {
//   return user.id;
// })

// console.log(ids);

// For  In Loop
const user = {
  firstName: 'kob',
  lastName: 'Jung',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`)
}