import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

//fails due and a helpful warning is displayed on the console due to the PropTypes
// const bookList = {};

const Hiring = () => 
  <div>
    <p>The library is hiring! Visit our website for more information.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring at the moment. Check back later for more info. Thank you.</p>
  </div>

class Library extends React.Component {

  //will be used in case that no props are provided to the component
  static defaultProps = {
    books: [
      {
        "title": "Tahoe Tales",
        "author": "Chet Whitley",
        "pages": 1000
      }
    ]
  };

  state = { 
    open: false,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  };
  
  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
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
        
        {this.state.loading ? "loading..." : <div>
          {this.state.data.map(product => {
            return (
              <div key={product.id}>
                <h3>Library Product of the Week!</h3>
                <h4>{product.name}</h4>
                <img alt={product.name} src={product.image} height={100}/>
              </div>
            )
          })}
        </div>}

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

const Book = ({title="No title provided", author="No author provided", pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
    </section>
  )
};


// class FavoriteColorForm extends React.Component {
//   state = { value: '' };
//   newColor = event => this.setState({ value: event.target.value })
//   submit = event => {
//     console.log(`The new favorite color is ${this.state.value}`);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label> Favorite Color:
//           <input type="color" onChange={this.newColor}></input>
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}

ReactDOM.render(
  <Library  books={bookList}/>,
  document.getElementById('root')
);