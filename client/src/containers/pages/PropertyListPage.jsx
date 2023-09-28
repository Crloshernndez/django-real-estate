import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "./../../redux/actions/properties/propertyActions";
import Spinner from "../../common/Spinner?";

const PropertyListPage = () => {
  const { loading, error, properties } = useSelector(
    (state) => state.propertiesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProperties());
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : error ? (
          <div>
            <p>{error}</p>
          </div>
        ) : (
          <div className="row">
            {properties.map((property) => (
              <div className="col-md-4" key={property._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyListPage;
