//44 Constructors & the 'this' keyword
//person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    console.log("date now :", Date.now());
    console.log("diff :", diff);
    console.log("age date: ", ageDate);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const kob = new Person('Kob', 47);
// const phing = new Person('Phing', 6);

// console.log(kob);
// console.log(phing.age);

const kob = new Person('Kob', '5/Jan/1981');
console.log(kob);
console.log(`Your age : ${kob.calculateAge()}`);

// const aye = new Person('Aye', '1-7-1975');
// console.log(aye);
// console.log(aye.calculateAge());

// const phing = new Person('Phing', '6-May-2018');
// console.log(phing);
// console.log(phing.calculateAge());
