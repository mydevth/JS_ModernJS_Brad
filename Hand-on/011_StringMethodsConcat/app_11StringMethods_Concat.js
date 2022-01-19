//11 String Methods and Concatenation
const firstName = 'Akkadate';
const lastName = 'Siripongwattana';
const age = 36;
const str1 = 'Hello there my name is Kob';
const tags = 'web desing,web development,programming';

let val;

val = firstName + lastName;

//concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Kob ';
val += 'Chonburi';

val = 'Hellom my name is ' + firstName + ' and I am ' + age

//Escaping
val = 'That \'s awesome, I can\'t  wait';

//length
val = firstName.length;

//concat with function
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//index
val = firstName[0];       //A

//indexOf()
val = firstName.indexOf('k');        //1
val = firstName.lastIndexOf('k');    //2

//charAt()
val = firstName.charAt('2');         //k

//get last char
val = firstName.charAt(firstName.length - 1);        //e

//substring()
val = firstName.substring(0, 4);   //Akka

//slice()
val = firstName.slice(0, 4);   //Akka
val = firstName.slice(3);   //adate
val = firstName.slice(-3);   //ate

//split()
val = str1.split(' ');  // ['Hello', 'there', 'my', 'name', 'is', 'Kob']
val = tags.split(',');   //['web desing', 'web development', 'programming']

//replace
val = str1.replace('Kob', 'Jack');

//includes()
val = str1.includes('Hello');   //true
val = str1.includes('xxx');   //flase

console.log(val);