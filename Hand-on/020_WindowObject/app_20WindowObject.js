//20  A Look At The window object

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// window.alert('Hello World');
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('No/Cancle');
// }

let val;
//Outer heigh and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner Height and width
// val = window.innerWidth;
// val = window.innerHeight;

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com'

//Reload
// window.location.reload();

// History Object
// window.history.go(-2);
// val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;    //Win32
val = window.navigator.vendor;    //Google Inc.
val = window.navigator.language;    //en-US


console.log(val);
