import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Library = () => {
  return (
    <div>
      <h1>Welcome to the Library!</h1>
      <Book title="The sun Also Rises" author="Ernest Hemingway" pages={260}/>
      <Book title="White Teeth" author="Zadie Smith" pages={480}/>
      <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304}/>
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
  <Library />,
  document.getElementById('root')
);