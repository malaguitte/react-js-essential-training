import React from 'react';

class FavoriteColorForm extends React.Component {
  state = { value: '' };
  newColor = event => this.setState({ value: event.target.value })
  submit = event => {
    console.log(`The new favorite color is ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label> Favorite Color:
          <input type="color" onChange={this.newColor}></input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default FavoriteColorForm;