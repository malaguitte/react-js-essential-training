import React from 'react';
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
class Library extends React.Component {
  state = { open: false };
  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const books = this.props.books;
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, index) => <Book key={index} title={book.title} author={book.author} pages={book.pages} />
        )}
      </div>
    )
  }
}

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