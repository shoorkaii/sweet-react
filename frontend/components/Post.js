import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            {/*<img src={this.props.post.image}/>*/}
            {/*<div className="title">{this.props.post.title}</div>*/}
            {/*<div className="content">{this.props.post.content}</div>*/}
            <div className="content">{props.post.message}</div>
        </div>
    )
};

export default Post;