//15 dates and times
let val;

const today = new Date();       //()
const birthday = new Date('9-10-1981 11:25:00');
const date2 = new Date('September 10 1988');
const date3 = new Date('9/10/1555');

val = today;                // Sat Jan 22 2022 22:32:48 GMT+0700 (Indochina Time)
val = today.getMonth();     //0 (January)
val = today.getDate();      //22
val = today.getDay();        //6 (Saturday)
val = today.getFullYear();    //2017
val = today.getHours();       //22
val = today.getMinutes();     //38
val = today.getSeconds();     //38
val = today.getMilliseconds();     //248
val = today.getTime();          //1642865996166   (timestamp)
val = birthday;             //Thu Sep 10 1981 11:25:00 GMT+0700 (Indochina Time)
val = date2;                //Sat Sep 10 1988 00:00:00 GMT+0700 (Indochina Time)
val = date3;                //Sat Sep 10 1555 00:00:00 GMT+0642 (Indochina Time)

//console.log(val);

birthday.setMonth(2);        //Tue Mar 10 1981 11:25:00 GMT+0700 (2 = Mar)  
birthday.setDate(12);        //Thu Mar 12 1981 11:25:00 GMT+0700
birthday.setFullYear(1999);  //Fri Mar 12 1999 11:25:00 GMT+0700
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);      //Fri Mar 12 1999 03:30:25 GMT+0700

console.log(birthday);





//more info -->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date



