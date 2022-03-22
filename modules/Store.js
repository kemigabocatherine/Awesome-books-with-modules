// Store Class
export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(index) {
    const books = Store.getBooks();
    let counter = 0;

    books.forEach((book) => {
      if (book.title === index) {
        books.splice(counter, 1);
      }
      counter += 1;
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}