document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local txt data
// function getText() {
//   fetch('test.txt')
//     .then(function (res) {
//       // console.log(res);
//       return res.text()
//     })
//     .then(function (data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }


//Arrow Function
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}


//get local json data
// function getJson() {
//   fetch('posts.json')
//     .then(function (res) {
//       // console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (post) {
//         output += `<li>${post.title} :${post.body}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

//get local json data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title} :${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


//get from External API ** Arrow functions
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login} :${user.url}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}