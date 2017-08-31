/**
 * Created by reza on 8/13/17.
 */

import * as actionTypes from '../actions/actionTypes';

export const getBlogPostsReducer = (state = [], action) => {
    switch (action.type) {

        case actionTypes.FETCH_BLOG_POSTS_SUCCESS: {
            return action.blogPosts;
        }

        default:
            return state;
    }
};