import Book from './modules/Booklist.js';

import Main from './modules/content.js';

import Store from './modules/Store.js';

// Event: Add a Book
document.querySelector('#add').addEventListener('click', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to Main
  Main.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  Main.clearFields();
});

// Event: Remove a book
document.querySelector('#books-collection').addEventListener('click', (e) => {
  // from Main
  Main.deleteBook(e.target);

  // from Store
  Store.removeBook(e.target.parentElement.id);
});

// FULL WEBSITE
// List
const item1 = document.querySelector('#nav-item1');
const bookSection = document.querySelector('#list');

// Add new
const item2 = document.querySelector('#nav-item2');
const formSection = document.querySelector('.form');

// Contact
const item3 = document.querySelector('#nav-item3');
const contactSection = document.querySelector('#contact');

// list function
item1.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// add new function
item2.addEventListener('click', () => {
  formSection.style.display = 'block';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// contact function
item3.addEventListener('click', () => {
  contactSection.style.display = 'block';
  bookSection.style.display = 'none';
  formSection.style.display = 'none';
});