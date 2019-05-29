import React from 'react';
import ReactDOM from 'react-dom';


const titleStyle = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
};

ReactDOM.render(
  <div style={titleStyle}>
    <h1 id="heading-element">Hello World!</h1>
    <p>It is working! ;)</p>
  </div>,
  document.getElementById('root')
);