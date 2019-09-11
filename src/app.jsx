import React from 'react';
import ReactDOM from 'react-dom';
// PACKAGE
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// STYLING
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <p>THIS IS EXPENSE PAGE</p>
    </div>
  );
};
const AddExpensePage = () => {
  return (
    <div>
      <p>THIS IS ADD PAGE</p>
    </div>
  );
};
const EditExpensePage = () => {
  return (
    <div>
      <p>THIS IS EDIT PAGE</p>
    </div>
  );
};
const HelpPage = () => {
  return (
    <div>
      <p>THIS IS HELP PAGE</p>
    </div>
  );
};
const NotFoundPage = () => {
  return (
    <div>
      <p>404 ~ <Link to='/'>Go Home !</Link></p>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <h2>Money Management App</h2>
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))

