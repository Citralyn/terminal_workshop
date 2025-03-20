import { Outlet } from "react-router"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Layout() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Terminal Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#files">Files</Nav.Link>
            <Nav.Link href="#system">System</Nav.Link>
            <Nav.Link href="#networks">Network</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#scripting">Scripting</Nav.Link>
            <Nav.Link href="#misc">Misc</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet></Outlet>
    </div>
  );
}

