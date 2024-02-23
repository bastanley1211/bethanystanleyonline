import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./App.css";
import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <div id="main-header">
    <Navbar color="light" sticky="top" expand="lg" className="bg-body-tertiary p-1">
      <Container>
        <Navbar.Brand style={{}} href="#home">Main Nav</Navbar.Brand>
        <Navbar.Toggle style={{border: 0}} aria-controls="basic-navbar-nav">Toggler</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#music">Music</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#media">Other Media</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default MainNav;