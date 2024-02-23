import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './koisan.png';
import OffcanvasNav from "./functions/OffcanvasNav";
import { Link } from "react-router-dom";
import { scrollToBottom } from "./functions/scrollBottom";


class MainHeader extends React.Component {



    render () {
        return <Container id="main-header-img" className="jumbotron">
        <Link to="/"><Row> 
        <Col>
        <Link onClick={scrollToBottom}  style={{color: "rgb(100, 86, 73)", backgroundColor: "#fcf2e1", borderColor: "transparent", cursor: "pointer"}} id="menu-button-btn" title="Menu">Menu</Link>
        <h1 className="cursive" style={{fontSize: "4.5vw"}}>Bethany<br/>Stanley
        </h1>
        <h2 className="" style={{fontSize: "3vw"}}>
            Musician, Writer,<br/>
            Mother, Disciple
        </h2>
        </Col></Row></Link></Container>
        
    }
}

export default MainHeader;