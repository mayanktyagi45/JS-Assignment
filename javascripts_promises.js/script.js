import BookManager from './bookManager.js';

const newBook = new BookManager('.js-all-books');
let bookData;

function searchById() {
  const table = document.querySelector('.js-all-books');
  const idForm = document.querySelector('.js-book-id');
  const genreForm = document.querySelector('.js-book-genre');
  const priceForm = document.querySelector('.js-book-price');
  idForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.js-id-input');
    const { value } = inputField;
    const tableBody = document.querySelector('tbody');
    table.removeChild(tableBody);

    const result = bookData.filter((book) => book.id === value);
    newBook.fetchData(result);
    inputField.value = '';
  });
  genreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.js-genre-input');
    const { value } = inputField;
    const tableBody = document.querySelector('tbody');
    table.removeChild(tableBody);

    const result = bookData.filter((book) => book.genre === value);
    newBook.fetchData(result);
    inputField.value = '';
  });
  priceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.js-price-input');
    const { value } = inputField;
    const tableBody = document.querySelector('tbody');
    table.removeChild(tableBody);

    const result = bookData.filter(
      (book) => book.price === parseInt(value, 10)
    );
    newBook.fetchData(result);
    inputField.value = '';
  });
}

newBook
  .getData()
  .then((data) => {
    bookData = data;
    newBook.fetchData(bookData);
    searchById();
  })
  .catch((err) => {
    console.error(err);
  });
