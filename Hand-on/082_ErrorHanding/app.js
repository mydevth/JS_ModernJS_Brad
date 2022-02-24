const user = { email: 'tony@gmail.com' };

try {
  //Produce a ReferenceError    //ReferenceError: myFunction is not defined
  // myFunction();

  //Produce a TypeError         // TypeError: Cannot read properties of null (reading 'myFunction')
  // null.myFunction();

  //Will produce SyntaxError    //SyntaxError: Unexpected identifier
  // eval('Hello world');

  //Will produce a URIError     // URIError: URI malformed
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch (e) {
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
  console.log(`User Error: ${e.message}`);
} finally {

  console.log('Finally runs reguardless of result....');
}

console.log('Program continues...');