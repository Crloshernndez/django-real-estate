import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <GiHouse className="nav-icon" /> Real Estate
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/properties">
                <Nav.Link>Properties</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <FaSignInAlt /> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
