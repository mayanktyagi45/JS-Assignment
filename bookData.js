import fs from 'fs';
import short from 'short-uuid';

class BookData {
  constructor() {
    this.data = [];
    this.genres = [
      'Mystery',
      'Science Fiction',
      'Fantasy',
      'Romance',
      'Thriller',
      'Historical Fiction',
      'Horror',
      'Adventure',
      'Non-fiction',
      'Biography',
      'Self-help',
    ];
  }

  generateData() {
    for (let idx = 0; idx < 100; idx += 1) {
      this.data.push({
        id: short.generate(),
        genre:
          this.genres[Math.floor(Math.random() * 1000) % this.genres.length],
        price: Math.floor(Math.random() * 10000),
      });
    }
  }
}

const getBook = new BookData();
getBook.generateData();

fs.writeFileSync('data.json', JSON.stringify(getBook.data));
