//29 event listener and the event object

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');
// //   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);
// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
  // console.log('Clicked')

  let val;
  val = e;

  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // e.target.innerText = 'Hello';

  //event type
  val = e.type;

  //timestamp
  val = e.timeStamp;

  //coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  //coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
