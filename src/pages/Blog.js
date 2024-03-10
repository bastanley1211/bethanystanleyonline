import { Container } from "react-bootstrap";
import AllPosts from "../Blog/AllPosts";

const MyBlog = () => {

    return <Container fluid className="Blog">  <h1 style={{fontSize: "1.5em"}}>My Blog</h1>
  <AllPosts />
    </Container> 
  };
  
  export default MyBlog;