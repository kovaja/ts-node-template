import React from 'react';
import './common-styles//bootstrap-grid.css';
import './common-styles/index.css';
import './common-styles/paddings-margins.css';
import { Main } from './components/Main';
// tslint:disable-next-line:no-submodule-imports
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);