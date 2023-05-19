import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand href="/">Movie Plus</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="offers">Offers</Nav.Link>
            <NavDropdown title="Links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navbar bg="secondary" className="pt-0 pb-0" variant="secondary">
    <Container>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-between">
        <Nav className="justify-content-start">
        <Navbar.Text >
        <a href="#login">Link A</a> &nbsp;
        </Navbar.Text>
        <Navbar.Text >
        <a href="#login">Link B</a> &nbsp;
        </Navbar.Text>
        <Navbar.Text >
        <a href="#login">Link C</a> &nbsp;
        </Navbar.Text>
        </Nav>

        <Nav className="justify-content-end">
        <Navbar.Text >
        <a href="#login">Link D</a> &nbsp;
        </Navbar.Text>
        <Navbar.Text >
        <a href="/offers">Offers</a> &nbsp;
        </Navbar.Text>
        <Navbar.Text >
        <a href="#login">Link F</a> &nbsp;
        </Navbar.Text>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</>
  );
}

export default Header;