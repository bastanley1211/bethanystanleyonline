import { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OffcanvasNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button
    style={{color: "rgb(100, 86, 73)", backgroundColor: "#fcf2e1", borderColor: "transparent"}}
    onClick={handleShow}
   >
    Menu
  </Button>
  <Offcanvas show={show} onHide={handleClose}>
    <OffcanvasHeader closeButton class="btn-close">
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/media">Other Media</Link></li>
      </ul>
    </OffcanvasBody>
  </Offcanvas>

    </>
  );
}

export default OffcanvasNav;