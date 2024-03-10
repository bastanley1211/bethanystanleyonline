import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { Row, Col, Container } from "react-bootstrap";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <h3>Most Recent Posts:</h3>
      
      <Container fluid>
        <Row>  
            <Col xs={12}>
        {allPostsData &&
          allPostsData.slice(0,3).map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
             
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" style={{width: "80vw", maxWidth: "300px"}}/>
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            
            </Link>
           
          ))}
          </Col>
          </Row>
      </Container>
     
    </div>
  );
}