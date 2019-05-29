import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 10,
  goal: 100
};

const getPercentage = (decimal) => (decimal * 100) + '%';

const calculateGoalProgress = (total, goal) => getPercentage(total / goal);

const SkiDataCounter = ({total, powder, backCountry, goal}) => {
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
        <p>Goal Progress: {calculateGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
}

ReactDOM.render(
  <SkiDataCounter 
    total={skiData.total}
    powder={skiData.powder}
    backCountry={skiData.backCountry}
    goal={skiData.goal} />,
  document.getElementById('root')
);