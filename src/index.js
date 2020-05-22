import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={Store}>
      <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
