import React from "react";

const Posts = (props) => {

    const postsJSX = props.posts.map((post, index) => (
        <div className="summary">
            <h1>{post.title}</h1>
            <p>{post.date}</p>
        </div>
    ))
    return <div className="posts">{postsJSX}</div>;
}

export default Posts;