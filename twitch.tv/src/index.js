import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './Component/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create store
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
    );

ReactDom.render(
    <Provider store = {store}>
         <App />
    </Provider>, 
    document.querySelector("#root")
);

