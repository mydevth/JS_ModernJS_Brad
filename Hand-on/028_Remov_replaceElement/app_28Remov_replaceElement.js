//28 Removing and replacing Element

//REPLACE ELEMENT

//create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

// //remove child element
list.removeChild(lis[3]);

//classes &attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('xtest');
link.classList.remove('xtest');
val = link;

//Atrributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

// console.log(firstLi);
console.log(val);
console.log(link);
