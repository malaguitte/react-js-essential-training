import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const bookList = [
  {
    title: "The sun Also Rises",
    author: "Ernest Hemingway",
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

const Library = ({books}) => {
  return (
    <div>
      <h1>Welcome to the Library!</h1>
      {books.map(
        (book, index) => <Book key={index} title={book.title} author={book.author} pages={book.pages} />
      )}
    </div>
  )
};

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
};

ReactDOM.render(
  <Library books={bookList} />,
  document.getElementById('root')
);