var uniqueRandomArray = require('unique-random-array');
var bookList = require('./finding-islamic-books.json');

module.exports = {
    allBooks: bookList,
    randomBook : uniqueRandomArray(bookList)
};
