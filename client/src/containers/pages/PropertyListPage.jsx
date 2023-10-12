import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Property from "../../components/properties/Property";
import Spinner from "../../common/Spinner";
import { getProperties } from "../../features/properties/propertySlice";

const PropertyListPage = () => {
  const { properties, isLoading, isSuccess } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  if (isLoading || !isSuccess) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <h1>Our Catalog of properties</h1>
            <hr className="hr-text" />
          </Col>
        </Row>
        {
          <>
            <Row className="mt-3">
              {properties.map((property) => (
                <Col key={property.id} sm={12} md={6} lg={4} xl={3}>
                  <Property property={property} />
                </Col>
              ))}
            </Row>
          </>
        }
      </Container>
    </>
  );
};

export default PropertyListPage;
