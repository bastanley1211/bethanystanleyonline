import { List } from "reactstrap";
import blog from "../posts.json";
import React from "react";


const blogTitles = blog.title;

const Blog = () => {
    return <>
    {blogTitles?.map((title) => (
      <ul title={title}>{title}</ul>
    )
      
    )}
    </>
  };
  
  export default Blog;