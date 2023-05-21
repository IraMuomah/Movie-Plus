import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container >
        {/* <Navbar.Brand href="/">Movie Plus</Navbar.Brand> */}
        <Navbar.Brand>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Movie Plus</Link>
        </Navbar.Brand>         
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></Nav.Link>                   {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link><Link to="/offers" style={{ color: 'inherit', textDecoration: 'inherit'}}> Offers</Link></Nav.Link>          {/* <Nav.Link href="offers">Offers</Nav.Link> */}
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#">Stream Online</NavDropdown.Item>                   {/* Dont for get to add a <Link> tag when eventualy updating to="" key/attribute */}
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Purchase Tickets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Buy BlueRay DVDs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>Movies</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
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
                <Link to="#" style={{color: 'inherit', textDecoration: 'line-through'}}>Stream</Link> &nbsp;
              </Navbar.Text>
              <Navbar.Text >
                <Link to="#" style={{color: 'inherit', textDecoration: 'line-through'}}>Tickets</Link> &nbsp;
              </Navbar.Text>
              <Navbar.Text >
                <Link to="/" style={{color: 'inherit', textDecoration: 'line-through'}}>BlueRay</Link> &nbsp;
              </Navbar.Text>
            </Nav>

            <Nav className="justify-content-end">
              <Navbar.Text >
                <Link to="#" style={{color: 'inherit', textDecoration: 'line-through'}}>Contact Us</Link> &nbsp;
              </Navbar.Text>
              <Navbar.Text >
                <Link to="/offers" style={{ color: 'none', textDecoration: 'inherit'}}> Offers</Link> &nbsp;
              </Navbar.Text>
              <Navbar.Text >
                <Link to="/" style={{color: 'inherit', textDecoration: 'line-through'}}>About Us</Link> &nbsp;
              </Navbar.Text>
              {/* link sugestions: careers,  */}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  );
}

export default Header;


// PERSONAL NOTE:
/* 
when using HashRouter you can use href="" Key/Atrribute, you need to instead use to="" , 
which is best used in a react <Link> tag, using just <Nav.Link> or <a> only works with BrowserRouter
 */