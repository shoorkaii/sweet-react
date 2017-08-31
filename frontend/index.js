/**
 * Created by reza on 7/9/17.
 */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();


render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>,
    document.getElementById('homepage')
);