export default class BookManager {
  constructor(tableSelector) {
    this.table = document.querySelector(tableSelector);
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    return fetch('data.json').then((response) => {
      if (!response.ok) {
        throw new Error('Bad Network');
      }
      return response.json();
    });
  }

  fetchData(bookData) {
    try {
      // To sort the list based on the price of the books
      bookData.sort((a, b) => a.price - b.price);

      const generateTable = (book) => {
        const tableRow = document.createElement('tr');

        Object.keys(book).forEach((index) => {
          const cell = document.createElement('td');
          cell.textContent = book[index];
          tableRow.appendChild(cell);
        });
        return tableRow;
      };

      const tableBody = document.createElement('tbody');
      bookData.forEach((book) => {
        const tableRow = generateTable(book);
        tableBody.appendChild(tableRow);
      });
      this.table.appendChild(tableBody);
    } catch (err) {
      console.error(`Data can not be fetched: ${err}`);
    }
  }
}
