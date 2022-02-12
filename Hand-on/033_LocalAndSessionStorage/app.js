//33 Local and Session Storage

// //set local storage item
// localStorage.setItem('name', 'Kob');
// localStorage.setItem('age', '45');

// //set session storage item
// sessionStorage.setItem('name', 'Phing');

//remove form storage
// localStorage.removeItem('tasks');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear()
// console.log(name, age)
//---------------
document.querySelector('form').addEventListener('submit', function (e) {
  // console.log(123);\
  const task = document.getElementById('task').value;

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});