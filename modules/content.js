/* eslint-disable no-undef */
// Main Class
export default class Main {
  static displayBooks = () => {
    const books = Store.getBooks();

    books.forEach((book) => Main.addBookToList(book));
  }

  static addBookToList = (book) => {
    const collection = document.querySelector('#books-collection');

    const element = document.createElement('div');
    element.classList.add('item');
    element.setAttribute('id', book.title);

    element.innerHTML = `
      <p id="author">"${book.title}" by ${book.author}</p>
      <button type="button" class="delete">Remove</button>
    `;

    collection.appendChild(element);
  }

  static deleteBook = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#new-title').value = '';
    document.querySelector('#new-author').value = '';
  }
}