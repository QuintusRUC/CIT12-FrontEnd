import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router";
import { Outlet } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router";

const NavigationBarUp = ({ islogin }) => {
  const location = useLocation();
  if (!islogin) {
    return (
      <Navbar expand="md" bg="warning">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              activeKey={location.pathname}
              variant="underline"
              className="me-auto"
            >
              <Nav.Link as={NavLink} eventKey="A1" to="/Search">
                Search
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey="A2" to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  return (
    <Navbar expand="md" bg="warning">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            activeKey={location.pathname}
            variant="underline"
            className="me-auto"
          >
            <Nav.Link as={NavLink} eventKey="A1" to="/Search">
              Search
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="A3" to="/bookmark">
              Bookmark
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="A4" to="/rating">
              Rating
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="A2" to="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavigationBar = ({ user = null }) => {
  const islogin = user.islogin ? true : false;
  return (
    <>
      <NavigationBarUp islogin={islogin} />
      <Container className="my-5">
        {" "}
        <Outlet />{" "}
      </Container>
    </>
  );
};

export default NavigationBar;
