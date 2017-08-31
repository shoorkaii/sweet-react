import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <img src={this.props.image}/>
            <div className="title">{this.props.title}</div>
            <div className="content">{this.props.content}</div>
        </div>
    )
};

export default Post;