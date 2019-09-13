import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from '../components/Header.jsx';
import ExpenseDashBoardPage from '../components/ExpenseDashBoard.jsx';
import AddExpensePage from '../components/AddExpense.jsx';
import EditExpensePage from '../components/EditExpense.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFound.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default AppRouter;

