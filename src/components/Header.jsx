import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/procom_logo.jpg'

import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" variant='dark' className='navbar-custom'>
      <Container fluid>
      <Navbar.Brand className='me-auto'>
          <img
            alt="NAU Logo"
            src={logoIcon}
            className='logo'
          />{' '}
          Procom '25
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="d-flex mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/modules">Modules</Nav.Link>
            <Nav.Link as={Link} to="/sponsor">Sponsorships</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Header;