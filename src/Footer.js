import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import './App.css';
import { Link } from "react-router-dom";
import { scrollToTop } from "./functions/scrollTop";

class MainFooter extends React.Component {
    render () {
        return <Container className='Site-main-footer p-1'>
            <Row>
                <Col className="footer-section-col" style={{borderRight: "black 2px solid"}}>
                    <h3 className="footer-section-heading">Quick Links</h3>
                    <ul>
                        
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    </ul>
                </Col>
                <Col className="footer-section-col">
                    <h3 className="footer-section-heading">Site Navigation</h3>
                    <ul>
                        
                    <li><Link className="footer-nav-link" to="/" onClick={scrollToTop}>Home</Link></li>
                    <li><Link className="footer-nav-link" to="/about" onClick={scrollToTop}>About</Link></li>
                    <li><Link className="footer-nav-link" to="/music" onClick={scrollToTop}>Music</Link></li>
                    <li><Link className="footer-nav-link" to="/blog" onClick={scrollToTop}>Blog</Link></li>
                    <li><Link className="footer-nav-link" to="/media" onClick={scrollToTop}>Media</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row id="footer-copyright">
                <Col>
                <p>This site and all of it's content otherwise stated belong to Bethany Stanley.</p>
                </Col>
            </Row>
        </Container>
    
    }
}

export default MainFooter;