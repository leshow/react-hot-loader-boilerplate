import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Counter from './components/Counter';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Counter} />
    <Route path="fuel-savings" component={FuelSavingsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
