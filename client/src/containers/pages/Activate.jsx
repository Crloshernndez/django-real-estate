import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { activate, reset } from "../../features/auth/authSlice";

const Activate = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      uid,
      token,
    };

    dispatch(activate(userData));
    alert(`Your account has been activated. you can login now.`);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaCheckCircle /> Activate your account
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <Spinner />}
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              type="submit"
              variant="outline-success"
              size="lg"
              className="mt-3 large-btn"
              onClick={submitHandler}
            >
              Activate
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activate;
