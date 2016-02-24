require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './src/containers/HomeContainer';
import { Provider } from 'react-redux';
import configureStore from './src/store';

const store = configureStore();

ReactDOM.render(  <Provider store={store}><Home/></Provider>, document.querySelector("#myApp"));
