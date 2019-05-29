import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 10,
  goal: 100
};

class SkiDataCounter extends Component {
  render() {
    const {total, powder, backCountry, goal} = this.props;
    return (
      <section>
        <div>
          <p>Total days: {total}</p>
        </div>
        <div>
          <p>Powder days: {powder}</p>
        </div>
        <div>
          <p>Backcountry days: {backCountry}</p>
        </div>
        <div>
          <p>Goal: {goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDataCounter 
    total={skiData.total}
    powder={skiData.powder}
    backCountry={skiData.backCountry}
    goal={skiData.goal} />,
  document.getElementById('root')
);