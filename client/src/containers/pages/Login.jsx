import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      alert("An email must be provides");
    }

    if (!password) {
      alert("A Password must be provided");
    }

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaSignInAlt /> Login
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>

        {isLoading && <Spinner />}
        <Row className="mt-3">
          <Col className="justify-content-center">
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="mt-3">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="py-3">
          <Col>
            New Customer?
            <Link to="/register"> Register Here.....</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
