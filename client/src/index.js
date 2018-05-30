/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootEl = document.getElementById('root');

const render = () => {
  const App = require('./components/App/App.jsx').default;

  ReactDOM.render(
  <Router>
  <Route path="/" component={App} />
  </Router>,
  rootEl,
);
};

if (module.hot) {
  module.hot.accept('./components/App/App.jsx', () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();
