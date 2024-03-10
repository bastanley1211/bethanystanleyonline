import React from "react"

const Post = (props) => {

    const paragraphs = props.paragraph.map((para) => (
        <>
        <p>{para.concat(" ")}</p>
        <h2></h2>
        </>
    ))
    return <div id="post" class="post">
        <h2 style={{fontSize: "1.75em"}}>{props.post.title}</h2>
        <h5 style={{fontSize: ".9em"}}>{props.post.date}</h5>
        <p>{paragraphs}</p>
    </div>
}

export default Post;