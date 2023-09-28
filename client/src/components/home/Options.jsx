import React, { useState } from "react";

const Options = () => {
  // Definir estados para las opciones
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(true);
  const [comprarPropiedad, setComprarPropiedad] = useState(false);
  const [venderPropiedad, setVenderPropiedad] = useState(false);

  // Función para cambiar el estado de mostrarFiltros
  const toggleMostrarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  // Función para cambiar el estado de mostrarNotificaciones
  const toggleMostrarNotificaciones = () => {
    setMostrarNotificaciones(!mostrarNotificaciones);
  };

  // Función para cambiar el estado de comprarPropiedad
  const toggleComprarPropiedad = () => {
    setComprarPropiedad(!comprarPropiedad);
  };

  // Función para cambiar el estado de venderPropiedad
  const toggleVenderPropiedad = () => {
    setVenderPropiedad(!venderPropiedad);
  };

  return (
    <div className="container mt-5">
      <h1>Opciones</h1>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="mostrarFiltros"
          checked={mostrarFiltros}
          onChange={toggleMostrarFiltros}
        />
        <label className="form-check-label" htmlFor="mostrarFiltros">
          Mostrar Filtros de Búsqueda
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="mostrarNotificaciones"
          checked={mostrarNotificaciones}
          onChange={toggleMostrarNotificaciones}
        />
        <label className="form-check-label" htmlFor="mostrarNotificaciones">
          Mostrar Notificaciones
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="comprarPropiedad"
          checked={comprarPropiedad}
          onChange={toggleComprarPropiedad}
        />
        <label className="form-check-label" htmlFor="comprarPropiedad">
          Comprar una Propiedad
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="venderPropiedad"
          checked={venderPropiedad}
          onChange={toggleVenderPropiedad}
        />
        <label className="form-check-label" htmlFor="venderPropiedad">
          Vender una Propiedad
        </label>
      </div>
    </div>
  );
};

export default Options;
