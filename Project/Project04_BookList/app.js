//ES5

//book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI constructor
function UI() { }

// Add Book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  //Create tr element
  const row = document.createElement('tr');
  //Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete"> X <a></td>
`;

  list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function (message, className) {
  //create div
  const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container');
  //get form
  const form = document.querySelector('#book-form');
  //insert alert
  container.insertBefore(div, form);

  //set time out after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}


//clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


//Event Listeners for Add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // console.log('test');
  //get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  // console.log(title, author, isbn);

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantitate UI
  const ui = new UI();

  console.log(ui);

  //Validate
  if (title === '' || author === '' || isbn === '') {
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');

  } else {

    //add book to list  
    ui.addBookToList(book)

    //Show add success
    ui.showAlert('Book Added!', 'success');

    //clear fields
    ui.clearFields();
  }


  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  //Instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);
  //show message delete
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});