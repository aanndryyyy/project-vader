import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './lib/registerServiceWorker';

import './styles/index.css';

import Core from './components/Core/Core';

render((
  <Core />
), document.getElementById('root'));
  
registerServiceWorker();
