//66 ES6 Promises
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post Two' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
      resolve();
    }, 2000);
    // console.log('createPost function');
  })
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}: ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
  // console.log('getPost function');
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });

