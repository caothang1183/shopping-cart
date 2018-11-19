import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';
import reducers from './reducers';
import { Provider } from 'react-redux';

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
