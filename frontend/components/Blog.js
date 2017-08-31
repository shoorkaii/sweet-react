/**
 * Created by reza on 7/9/17.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as blogActions from '../actions/blogActions';
import Post from './Post';


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPosts: null
        };
    }

    componentDidMount() {
        this.props.fetchBlogPosts();
    }

    render() {
        return (
            <div className="homepage">
                {this.state.blogPosts.map((p, i) =>
                    <Post key={i} post={p}/>
                )}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        blogPosts: state.blogPosts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogPosts: () => dispatch(blogActions.fetchBlogPosts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);