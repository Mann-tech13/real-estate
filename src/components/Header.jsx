import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/infographic.png'
import "../styles/header.css"

function Header() {
  return (
    <div>
      <Navbar className="header" expand="lg">
        <Container fluid>
          <div className='logoAndname'>
              <img
                alt=""
                src = {Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            <Navbar.Brand href="#">Estatery</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='subsection rent'>Rent</Nav.Link>
              <Nav.Link href="#action2" className='subsection buy'>Buy</Nav.Link>
              <Nav.Link href="#action3" className='subsection sell'>Sell</Nav.Link>
              <NavDropdown title="Manage Property" id="navbarScrollingDropdown" className="dropdown">
                <NavDropdown.Item href="#action4">Review</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Check Market Rate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Call Consultant
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action7">Brochures</NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Map Help
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action9">
                  App Service
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" className='login'>Login</Button>
              <Button variant="outline-success" className='signup'>Sign Up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header