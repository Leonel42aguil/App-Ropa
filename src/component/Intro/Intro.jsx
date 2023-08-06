import React from 'react';
import "../../CSS/productos.css"
// import "../../CSS/slider.css"
import "../../CSS/style.css"

const Intro = () => {
  return (
    <section className="w-50 mx-auto text-center pt-4" id="intro">
      <h1 className="p-3 fs-1 border-top border-3">
        Bienvenido a todos nuestros productos
        <br />
        <span className="text-primary serLibre">ERES LIBRE</span>
      </h1>
      <p className="p-3 fs-4">
        <span className="text-primary">VERANO 2023</span> Pequeña introducción a nuestro catalogo
      </p>
    </section>
  );
};

export default Intro;
