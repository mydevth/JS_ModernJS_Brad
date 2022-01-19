//number and math object
const num1 = 100;
const num2 = 50;

//simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//math object
val = Math.PI;                //3.141592653589793
val = Math.E;                 //2.718281828459045
val = Math.round(2.4);        //2
val = Math.ceil(2.4);         //3
val = Math.floor(2.4);        //2
val = Math.sqrt(64);          //8
val = Math.abs(-3);           //3
val = Math.pow(8, 2);         //64
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);        //-2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);        //55
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);  //random between 1-20

console.log(val);