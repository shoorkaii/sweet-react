import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <img src={props.post.image}/>
            <div className="info">
                <h3 className="title">{props.post.title}</h3>
                <div className="content">{props.post.content}</div>
            </div>
        </div>
    )
};

export default Post;