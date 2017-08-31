/**
 * Created by reza on 8/13/17.
 */

import Axios from 'axios';
import * as actionTypes from './actionTypes';
import * as baseApiUrl from '../api/baseApi';
import {setAxiosHeader} from '../middleware/utils';

export const fetchBlogPostsSuccess = (blogPosts) => {
    return {
        type: actionTypes.FETCH_BLOG_POSTS_SUCCESS,
        blogPosts
    }
};

export const fetchBlogPosts = () => {
    return (dispatch) => {
        setAxiosHeader();
        return Axios.get(baseApiUrl.getPostsUrl)
            .then(response => {
                console.log(response.data);
                dispatch(fetchBlogPostsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};