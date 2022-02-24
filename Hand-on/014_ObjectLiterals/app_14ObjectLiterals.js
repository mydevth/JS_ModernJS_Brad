//14 Object Literals
const person = {
  firstName: 'Akkadate',
  lastName: 'Siripongwattana',
  age: 30,
  email: 'akkadate@gmail.com',
  hobbies: ['music', 'running'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return 1987 - this.age;
  }
}

let val;

val = person;       //{firstName: 'Akkadate', lastName: 'Siripongwattana'}

//get spacific value
val = person.firstName;           //Akkadate   (recommened)
val = person['lastName'];         //Siripongwattana
val = person.age;                 //30
val = person.hobbies;             // ['music', 'running']
val = person.hobbies[1];          //running
val = person.address.state;       //FL
val = person.address['city'];     //Miami
val = person.getBirthYear();      //1987

console.log(val);

const people = [
  { name: 'Kob', age: 30 },
  { name: 'Phing', age: 6 },
  { name: 'aye', age: 25 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

