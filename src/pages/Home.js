import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
    <h1>Welcome</h1>
    <h2>Please enjoy my slightly nostaglic and retro website. :-)</h2>
    <Container>
      <Row>
        <Col xs={12} md={6}><Link className="inner-alt-box h2" to="/about">About Me</Link></Col>
        <Col xs={12} md={6}><Link className="inner-alt-box h2" to="/music">My Music</Link></Col>
        <Col xs={12} md={6}><Link className="inner-alt-box h2 disabled" to="/">Blog (Coming Soon!)</Link></Col>
        <Col xs={12} md={6}><Link className="inner-alt-box h2 disabled" to="/">Other Media (Coming Soon!)</Link></Col>
      </Row>
    </Container>
    
    <p className="blockquote m-2 p-2">There is not much here on the homepage yet, but I have plans to make it <em>even cuter</em> and add little details that show that I have at least some Front End Dev and design chops, but mainly for my own pleasure. :-P</p>
    </>
  };
  
  export default Home;