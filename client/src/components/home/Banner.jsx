import React from "react";

const Banner = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid banner">
        <div className="container text-center">
          <h1 className="display-4">Bienvenido a Nuestra Página de Inicio</h1>
          <p className="lead">
            Descubre lo que tenemos para ofrecer y únete a nuestra comunidad.
          </p>
          <button className="btn btn-light btn-lg">Explora</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
