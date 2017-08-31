/**
 * Created by reza on 7/10/17.
 */

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState,
        applyMiddleware(thunk)
    );
}