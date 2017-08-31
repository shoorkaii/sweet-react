/**
 * Created by reza on 7/10/17.
 */

import {combineReducers} from 'redux';

import {
    getBlogPostsReducer
} from './blogReducers';

export default combineReducers({
    blogPosts: getBlogPostsReducer,
});