import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import Root from './root';
import configureStore from './store/configureStore'; // eslint-disable-line

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root/index', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./root/index').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>,
      rootEl
    );
  });
}
