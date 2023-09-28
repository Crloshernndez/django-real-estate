import React from "react";

const Faqs = () => {
  // Definir una lista de preguntas frecuentes y sus respuestas
  const faqData = [
    {
      pregunta: "¿Cómo puedo registrarme en el sitio?",
      respuesta:
        "Para registrarte en nuestro sitio, ve a la página de registro y completa el formulario con tus datos personales.",
    },
    {
      pregunta: "¿Olvidé mi contraseña, cómo puedo recuperarla?",
      respuesta:
        'Si olvidaste tu contraseña, puedes hacer clic en "Olvidé mi contraseña" en la página de inicio de sesión y seguir las instrucciones para restablecerla.',
    },
    {
      pregunta:
        "¿Cómo puedo ponerme en contacto con el servicio de atención al cliente?",
      respuesta:
        "Puedes ponerse en contacto con nuestro servicio de atención al cliente a través del formulario de contacto en la página de contacto o enviando un correo electrónico a support@example.com.",
    },
    // Agrega más preguntas y respuestas según sea necesario
  ];

  return (
    <div className="container mt-5">
      <h1>Preguntas Frecuentes</h1>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`faqHeading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faqCollapse${index}`}
                aria-expanded="true"
                aria-controls={`faqCollapse${index}`}
              >
                {item.pregunta}
              </button>
            </h2>
            <div
              id={`faqCollapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`faqHeading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.respuesta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
