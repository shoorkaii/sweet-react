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
            blogPosts: []
        };
    }

    componentDidMount() {
        this.props.fetchBlogPosts();
    }

    render() {
        return (
            <div className="blog">
                {this.props.blogPosts.map((p, i) =>
                    <Post key={p.created} post={p}/>
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