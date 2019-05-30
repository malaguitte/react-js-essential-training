import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';

const bookList = [
  {
    title: "The sun Also Rises",
    // author: "Ernest Hemingway",
    pages: 260
  },
  {
    title: "White Teeth",
    author: "Zadie Smith",
    pages: 480
  },
  {
    title: "Cat's Cradle",
    author: "Kurt Vonnegut",
    pages: 304
  }
];

ReactDOM.render(
  <Library  books={bookList}/>,
  document.getElementById('root')
);