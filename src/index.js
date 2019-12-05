import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import reducers from './reducers';
import mySaga from './sagas';

import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ar from 'react-intl/locale-data/ar';

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Run the saga
addLocaleData(en);
addLocaleData(ar);
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnchancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

