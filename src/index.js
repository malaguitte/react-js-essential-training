import React from 'react';
import ReactDOM from 'react-dom';


const titleStyle = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
};

const title = React.createElement(
  'h1',
  {
    id: 'title',
    className: 'header',
    style: titleStyle
  },
  'Hello World'
);

ReactDOM.render(
  title,
  document.getElementById('root')
);