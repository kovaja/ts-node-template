import React from 'react';
import { Provider } from 'react-redux';
import './common-styles//bootstrap-grid.css';
import './common-styles/index.css';
import './common-styles/paddings-margins.css';
import Main from './components/Main';
import { store } from './store';
// tslint:disable-next-line:no-submodule-imports
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render((
  <Provider store={store}>
    <Main />
  </Provider>
));