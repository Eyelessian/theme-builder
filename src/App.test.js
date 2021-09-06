import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

it('renders without crashing', () => {
  setToLS('all-themes', themes.default);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});