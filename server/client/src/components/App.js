import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <Route path='/' component={Landing} />
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
