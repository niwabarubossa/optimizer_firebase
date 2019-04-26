import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const enhancer = process.env.NODE_ENV === 'development' ?
composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
 document.getElementById('root'));

serviceWorker.unregister();
