import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router";
import { Outlet } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router";

const NavigationBar = () => {
    const location = useLocation();
    return (
      <>
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
        <Container className="my-5">
          {" "}
          <Outlet />{" "}
        </Container>
      </>
    );
};

export default NavigationBar;
