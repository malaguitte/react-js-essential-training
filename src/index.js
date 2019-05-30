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

const Hiring = () => 
  <div>
    <p>The library is hiring! Visit our website for more information.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring at the moment. Check back later for more info. Thank you.</p>
  </div>

class Library extends React.Component {

  state = { 
    open: false,
    freeBookmark: true,
    hiring: true
  };
  
  componentDidMount() {
    console.log("The component is now mounted.");
  }

  componentDidUpdate() {
    console.log("The component has been updated.");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const books = this.props.books;
    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, index) =>
           <Book 
            key={index} 
            title={book.title} 
            author={book.author} 
            pages={book.pages} 
            freeBookmark={this.state.freeBookmark} 
          />
        )}
      </div>
    )
  }
}

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
    </section>
  )
};

ReactDOM.render(
  <Library books={bookList} />,
  document.getElementById('root')
);