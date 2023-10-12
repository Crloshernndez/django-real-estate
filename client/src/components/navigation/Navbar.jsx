import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logouthandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
              {user ? (
                <NavDropdown
                  title={user.firstName ? user.firstName : "Welcome"}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logouthandler}>
                    <FaSignOutAlt /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
