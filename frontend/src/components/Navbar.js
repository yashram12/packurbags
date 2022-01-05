import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


const Navbarcomp = () => {
  return (
        <div>
            <Navbar bg="success" variant="dark" expand="lg" style={{zIndex:"100"}}>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand style={{marginLeft:"40px"}}>PaCkUrBaGs</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to='/login'><Nav.Link>Login/Register</Nav.Link></LinkContainer>
                        <LinkContainer to='/places'><Nav.Link>Places</Nav.Link></LinkContainer>
                        <LinkContainer to='/tours'><Nav.Link>Tours</Nav.Link></LinkContainer>
                        <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  );
};

export default Navbarcomp;
