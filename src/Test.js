import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet, NavLink, useLocation } from "react-router";

function Page() {
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
              <Nav.Link as={NavLink} eventKey="A1" to="/one">
                One
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey="A2" to="/two">
                Two
              </Nav.Link>
              <Nav.Link as={NavLink} eventKey="A3" to="/three">
                Three
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
}

export default Page;