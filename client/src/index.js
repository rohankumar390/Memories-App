import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import {applyMidlleware,componse} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";

ReactDOM.render(<App/>,document.getElementById('root'))

