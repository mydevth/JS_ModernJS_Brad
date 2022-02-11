//31Keyboard and input events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//Keydown
// taskInput.addEventListener('keydown', runEvent);
// //Keyup
// taskInput.addEventListener('keyup', runEvent);
// //Keypress
// taskInput.addEventListener('keypress', runEvent);
// //Focus
// taskInput.addEventListener('focus', runEvent);
// //blur
// taskInput.addEventListener('blur', runEvent);
// //cut
// taskInput.addEventListener('cut', runEvent);
// //paste
// taskInput.addEventListener('paste', runEvent);
// //copy
// taskInput.addEventListener('copy', runEvent);
//input
// taskInput.addEventListener('input', runEvent);
//change
select.addEventListener('change', runEvent);



function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  // heading.innerText = e.target.value;

  // //get inut value
  // console.log(taskInput.value);

  // e.preventDefault();    //prevent redirect
}
